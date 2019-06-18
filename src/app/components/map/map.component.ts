import { Component, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { SimulationRoute } from 'src/app/entities/SimulationRoute';
import { Location } from 'src/app/entities/Location';
import { RouteListenerService } from 'src/app/services/route-listener.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  simulationRoute: SimulationRoute = {
    trackerId: 50,
    steps: [
        {
            distance: 149,
            start: {
                lat: 51.623297,
                lng: 4.945620799999999,
                name: 'Prinses Maximastraat'
            },
            locations: [
                {
                    lat: 51.62319317777778,
                    lng: 4.945449544444443,
                    date: 1560845837500
                },
                {
                    lat: 51.62310089135803,
                    lng: 4.945297317283949,
                    date: 1560845842500
                },
                {
                    lat: 51.62301885898491,
                    lng: 4.945162004252399,
                    date: 1560845847500
                },
                {
                    lat: 51.62294594131993,
                    lng: 4.945041726002133,
                    date: 1560845852500
                },
                {
                    lat: 51.62288112561771,
                    lng: 4.944934812001896,
                    date: 1560845857500
                },
                {
                    lat: 51.62282351166019,
                    lng: 4.944839777335019,
                    date: 1560845862500
                },
                {
                    lat: 51.6227722992535,
                    lng: 4.944755302075572,
                    date: 1560845867500
                },
                {
                    lat: 51.622726777114224,
                    lng: 4.944680212956064,
                    date: 1560845872500
                },
                {
                    lat: 51.622686312990425,
                    lng: 4.944613467072057,
                    date: 1560845877500
                }
            ]
        },
        {
            distance: 51,
            start: {
                lat: 51.6223626,
                lng: 4.9440795,
                name: 'Julianastraat'
            },
            locations: [
                {
                    lat: 51.622268662500005,
                    lng: 4.9442540625,
                    date: 1560845882500
                },
                {
                    lat: 51.622204080468755,
                    lng: 4.94437407421875,
                    date: 1560845887500
                },
                {
                    lat: 51.62215968032227,
                    lng: 4.94445658227539,
                    date: 1560845892500
                }
            ]
        },
        {
            distance: 215,
            start: {
                lat: 51.622062,
                lng: 4.9446381,
                name: 'Kanaalstraat'
            },
            locations: [
                {
                    lat: 51.62222519387755,
                    lng: 4.9448164979591835,
                    date: 1560845897500
                },
                {
                    lat: 51.622371735318616,
                    lng: 4.944976692044981,
                    date: 1560845902500
                },
                {
                    lat: 51.622503323551406,
                    lng: 4.945120539795493,
                    date: 1560845907500
                },
                {
                    lat: 51.62262148441351,
                    lng: 4.945249709204116,
                    date: 1560845912500
                },
                {
                    lat: 51.62272758804478,
                    lng: 4.945365698060839,
                    date: 1560845917500
                },
                {
                    lat: 51.6228228647749,
                    lng: 4.945469851319937,
                    date: 1560845922500
                },
                {
                    lat: 51.62290841938971,
                    lng: 4.945563376695454,
                    date: 1560845927500
                },
                {
                    lat: 51.62298524394178,
                    lng: 4.945647358665306,
                    date: 1560845932500
                },
                {
                    lat: 51.62305422925384,
                    lng: 4.9457227710463965,
                    date: 1560845937500
                },
                {
                    lat: 51.62311617524834,
                    lng: 4.94579048828656,
                    date: 1560845942500
                }
            ]
        },
        {
            distance: 77,
            start: {
                lat: 51.62366129999999,
                lng: 4.9463864,
                name: 'Augoirkestraat'
            },
            locations: [
                {
                    lat: 51.62385999999999,
                    lng: 4.9465759333333335,
                    date: 1560845947500
                },
                {
                    lat: 51.623992466666664,
                    lng: 4.946702288888889,
                    date: 1560845952500
                },
                {
                    lat: 51.62408077777778,
                    lng: 4.946786525925926,
                    date: 1560845957500
                }
            ]
        },
        {
            distance: 114,
            start: {
                lat: 51.6242574,
                lng: 4.946955,
                name: 'Augoirkestraat'
            },
            locations: [
                {
                    lat: 51.62434694347826,
                    lng: 4.946679195652174,
                    date: 1560845962500
                },
                {
                    lat: 51.62441702098298,
                    lng: 4.946463348771267,
                    date: 1560845967500
                },
                {
                    lat: 51.62447186424755,
                    lng: 4.946294425125339,
                    date: 1560845972500
                },
                {
                    lat: 51.624514785063305,
                    lng: 4.946162224011135,
                    date: 1560845977500
                }
            ]
        },
        {
            distance: 79,
            start: {
                lat: 51.6246693,
                lng: 4.9456863,
                name: 'Sint Josephstraat'
            },
            locations: [
                {
                    lat: 51.62479349565218,
                    lng: 4.945553582608696,
                    date: 1560845982500
                },
                {
                    lat: 51.62489069224953,
                    lng: 4.945449716824196,
                    date: 1560845987500
                },
                {
                    lat: 51.6249667591518,
                    lng: 4.945368430558067,
                    date: 1560845992500
                },
                {
                    lat: 51.62502628977098,
                    lng: 4.945304815219356,
                    date: 1560845997500
                },
                {
                    lat: 51.6250728789512,
                    lng: 4.945255029302105,
                    date: 1560846002500
                }
            ]
        },
        {
            distance: 86,
            start: {
                lat: 51.6252406,
                lng: 4.9450758,
                name: 'Hoge Ham'
            },
            locations: [
                {
                    lat: 51.625394725,
                    lng: 4.945209875,
                    date: 1560846007500
                },
                {
                    lat: 51.62551031875,
                    lng: 4.94531043125,
                    date: 1560846012500
                },
                {
                    lat: 51.6255970140625,
                    lng: 4.9453858484375,
                    date: 1560846017500
                },
                {
                    lat: 51.625662035546874,
                    lng: 4.945442411328125,
                    date: 1560846022500
                }
            ]
        },
        {
            distance: 72,
            start: {
                lat: 51.6258571,
                lng: 4.9456121,
                name: 'Minister Ruys de Beerenbrouckstraat'
            },
            locations: [
                {
                    lat: 51.6259986,
                    lng: 4.9457921,
                    date: 1560846027500
                },
                {
                    lat: 51.62610079444445,
                    lng: 4.9459221,
                    date: 1560846032500
                },
                {
                    lat: 51.62617460154321,
                    lng: 4.946015988888889,
                    date: 1560846037500
                }
            ]
        }
    ]
};
  simulationRouteTwo: SimulationRoute = {
    trackerId: 50,
    steps: [
        {
            distance: 149,
            start: {
                lat: 51.623297,
                lng: 4.945620799999999,
                name: 'Prinses Maximastraat'
            },
            locations: [
                {
                    lat: 51.52319317777778,
                    lng: 4.945449544444443,
                    date: 1560845837500
                },
                {
                    lat: 51.52310089135803,
                    lng: 4.945297317283949,
                    date: 1560845842500
                },
                {
                    lat: 51.52301885898491,
                    lng: 4.945162004252399,
                    date: 1560845847500
                },
                {
                    lat: 51.52294594131993,
                    lng: 4.945041726002133,
                    date: 1560845852500
                },
                {
                    lat: 51.52288112561771,
                    lng: 4.944934812001896,
                    date: 1560845857500
                },
                {
                    lat: 51.52282351166019,
                    lng: 4.944839777335019,
                    date: 1560845862500
                },
                {
                    lat: 51.5227722992535,
                    lng: 4.944755302075572,
                    date: 1560845867500
                },
                {
                    lat: 51.522726777114224,
                    lng: 4.944680212956064,
                    date: 1560845872500
                },
                {
                    lat: 51.522686312990425,
                    lng: 4.944613467072057,
                    date: 1560845877500
                }
            ]
        },
        {
            distance: 51,
            start: {
                lat: 51.6223626,
                lng: 4.9440795,
                name: 'Julianastraat'
            },
            locations: [
                {
                    lat: 51.622268662500005,
                    lng: 4.9442540625,
                    date: 1560845882500
                },
                {
                    lat: 51.622204080468755,
                    lng: 4.94437407421875,
                    date: 1560845887500
                },
                {
                    lat: 51.62215968032227,
                    lng: 4.94445658227539,
                    date: 1560845892500
                }
            ]
        },
        {
            distance: 215,
            start: {
                lat: 51.622062,
                lng: 4.9446381,
                name: 'Kanaalstraat'
            },
            locations: [
                {
                    lat: 51.62222519387755,
                    lng: 4.9448164979591835,
                    date: 1560845897500
                },
                {
                    lat: 51.622371735318616,
                    lng: 4.944976692044981,
                    date: 1560845902500
                },
                {
                    lat: 51.622503323551406,
                    lng: 4.945120539795493,
                    date: 1560845907500
                },
                {
                    lat: 51.62262148441351,
                    lng: 4.945249709204116,
                    date: 1560845912500
                },
                {
                    lat: 51.62272758804478,
                    lng: 4.945365698060839,
                    date: 1560845917500
                },
                {
                    lat: 51.6228228647749,
                    lng: 4.945469851319937,
                    date: 1560845922500
                },
                {
                    lat: 51.62290841938971,
                    lng: 4.945563376695454,
                    date: 1560845927500
                },
                {
                    lat: 51.62298524394178,
                    lng: 4.945647358665306,
                    date: 1560845932500
                },
                {
                    lat: 51.62305422925384,
                    lng: 4.9457227710463965,
                    date: 1560845937500
                },
                {
                    lat: 51.62311617524834,
                    lng: 4.94579048828656,
                    date: 1560845942500
                }
            ]
        },
        {
            distance: 77,
            start: {
                lat: 51.62366129999999,
                lng: 4.9463864,
                name: 'Augoirkestraat'
            },
            locations: [
                {
                    lat: 51.62385999999999,
                    lng: 4.9465759333333335,
                    date: 1560845947500
                },
                {
                    lat: 51.623992466666664,
                    lng: 4.946702288888889,
                    date: 1560845952500
                },
                {
                    lat: 51.62408077777778,
                    lng: 4.946786525925926,
                    date: 1560845957500
                }
            ]
        },
        {
            distance: 114,
            start: {
                lat: 51.6242574,
                lng: 4.946955,
                name: 'Augoirkestraat'
            },
            locations: [
                {
                    lat: 51.62434694347826,
                    lng: 4.946679195652174,
                    date: 1560845962500
                },
                {
                    lat: 51.62441702098298,
                    lng: 4.946463348771267,
                    date: 1560845967500
                },
                {
                    lat: 51.62447186424755,
                    lng: 4.946294425125339,
                    date: 1560845972500
                },
                {
                    lat: 51.624514785063305,
                    lng: 4.946162224011135,
                    date: 1560845977500
                }
            ]
        },
        {
            distance: 79,
            start: {
                lat: 51.6246693,
                lng: 4.9456863,
                name: 'Sint Josephstraat'
            },
            locations: [
                {
                    lat: 51.62479349565218,
                    lng: 4.945553582608696,
                    date: 1560845982500
                },
                {
                    lat: 51.62489069224953,
                    lng: 4.945449716824196,
                    date: 1560845987500
                },
                {
                    lat: 51.6249667591518,
                    lng: 4.945368430558067,
                    date: 1560845992500
                },
                {
                    lat: 51.62502628977098,
                    lng: 4.945304815219356,
                    date: 1560845997500
                },
                {
                    lat: 51.6250728789512,
                    lng: 4.945255029302105,
                    date: 1560846002500
                }
            ]
        },
        {
            distance: 86,
            start: {
                lat: 51.6252406,
                lng: 4.9450758,
                name: 'Hoge Ham'
            },
            locations: [
                {
                    lat: 51.625394725,
                    lng: 4.945209875,
                    date: 1560846007500
                },
                {
                    lat: 51.62551031875,
                    lng: 4.94531043125,
                    date: 1560846012500
                },
                {
                    lat: 51.6255970140625,
                    lng: 4.9453858484375,
                    date: 1560846017500
                },
                {
                    lat: 51.625662035546874,
                    lng: 4.945442411328125,
                    date: 1560846022500
                }
            ]
        },
        {
            distance: 72,
            start: {
                lat: 51.6258571,
                lng: 4.9456121,
                name: 'Minister Ruys de Beerenbrouckstraat'
            },
            locations: [
                {
                    lat: 51.6259986,
                    lng: 4.9457921,
                    date: 1560846027500
                },
                {
                    lat: 51.62610079444445,
                    lng: 4.9459221,
                    date: 1560846032500
                },
                {
                    lat: 51.62617460154321,
                    lng: 4.946015988888889,
                    date: 1560846037500
                }
            ]
        }
    ]
};

  constructor(
    private routeListenerService: RouteListenerService
  ) { }

  ngOnInit() {
    this.initMap();
    if (this.routeListenerService.subsVar === undefined) {
      this.routeListenerService.subsVar = this.routeListenerService
        .invokeCarAddFunction.subscribe((res: SimulationRoute) => {
          this.startSimulation(res);
        });
    }
  }

  initMap() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement,
      {
        center: new google.maps.LatLng(52.1326, 5.2913),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#ebe3cd'
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#523735'
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#f5f1e6'
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#c9b2a6'
              }
            ]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#dcd2be'
              }
            ]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#ae9e90'
              }
            ]
          },
          {
            featureType: 'administrative.neighborhood',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dfd2ae'
              }
            ]
          },
          {
            featureType: 'poi',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dfd2ae'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#93817c'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#a5b076'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#447530'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f1e6'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#fdfcf8'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f8c967'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#e9bc62'
              }
            ]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e98d58'
              }
            ]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#db8555'
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#806b63'
              }
            ]
          },
          {
            featureType: 'transit',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dfd2ae'
              }
            ]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#8f7d77'
              }
            ]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#ebe3cd'
              }
            ]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dfd2ae'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#b9d3c2'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#92998d'
              }
            ]
          }
        ]
      }
    );


  }

  async startSimulation(simRoute: SimulationRoute) {
    const allLocations: Location[] = [];
    simRoute.steps.forEach(steps => {
      steps.locations.forEach(location => {
        allLocations.push(location);
      });
    });

    this.simulateMarker(allLocations);
  }

  async simulateMarker(locations: Location[]) {
    let marker;
    for (const location of locations) {
      marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: this.map
      });
      await wait(5000);
      marker.setMap(null);
    }
  }
}

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(() => {
    resolve();
  }, ms));
}
