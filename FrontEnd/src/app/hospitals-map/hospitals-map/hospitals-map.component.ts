import { Component, OnInit,ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from "googlemaps";
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospitals-map',
  templateUrl: './hospitals-map.component.html',
  styleUrls: ['./hospitals-map.component.scss']
})
export class HospitalsMapComponent implements OnInit {
  patientCoordinates:any;
  patientId: number;
  map: any;
  options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
  };
  @ViewChild('map') mapElement: ElementRef;

  constructor( private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private _patientService: PatientService, private _avRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this._avRoute.snapshot.params['patientId']) {  
      this.patientId = this._avRoute.snapshot.params['patientId'];  
    }
    this.initMap();
  }

  initMap() {
    this.mapsAPILoader.load().then(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 15
      });
      var marker = new google.maps.Marker({
        map: this.map,
        position: {lat: location.coords.latitude, lng: location.coords.longitude}
      });
      this.setPatientCoordinates(this.patientId);
      var service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 10000,
        keyword: 'подстанция скорая помощь Харьков'
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }), (error) => {
      console.log(error);
    }, this.options});
  }

  createMarker(place) {
    var infowindow = new google.maps.InfoWindow();
    var image = {
      url: 'https://imagizer.imageshack.com/img921/2885/TZSmlW.png',
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc,
      icon: image
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
      'Phone: ' + place.phone + '<br>' +
      place.vicinity + '</div>');
      infowindow.open(this.map, this);
    });
  }

  setPatientCoordinates(patientId: number) {
    this._patientService.getPatientCoordinates(patientId).subscribe(data=> {
      this.patientCoordinates = data;
      var marker = new google.maps.Marker({
        map: this.map,
        position: {lat: this.patientCoordinates.latitude, lng: this.patientCoordinates.longtitude}
      });
    });   
  }
}
