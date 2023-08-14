import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
        id: 1,
        title: 'Evan',
        description: 'Mon fils ainé, mon premier bonheur.',
        imageUrl: 'https://thecuriousfootprint.com/wp-content/uploads/2020/10/Terra-Willy-primary-featured-image.png',
        createdDate: new Date(),
        snaps: 30,
        location: "Guadeloupe"
        },
        {
          id: 2, 
          title: 'Louise',
          description: 'Ma fille, ma princesse',
          imageUrl: 'https://pbs.twimg.com/media/FwbHh-PWAAgCQHE.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: "Guadeloupe"
        },
        {
          id: 3,
          title: 'Papa',
          description: 'Super Hero!!',
          imageUrl: 'https://wallpapercave.com/wp/wp7082894.jpg',
          createdDate: new Date(),
          snaps: 0
        },
        {
          id: 4,
          title: 'Evan',
          description: 'Mon fils ainé, mon premier bonheur.',
          imageUrl: 'https://thecuriousfootprint.com/wp-content/uploads/2020/10/Terra-Willy-primary-featured-image.png',
          createdDate: new Date(),
          snaps: 0,
          location: "Guadeloupe"
          },
          {
            id: 5,
            title: 'Louise',
            description: 'Ma fille, ma princesse',
            imageUrl: 'https://pbs.twimg.com/media/FwbHh-PWAAgCQHE.jpg',
            createdDate: new Date(),
            snaps: 160,
            location: "Guadeloupe"
          },
          {
            id: 6,
            title: 'Papa',
            description: 'Super Hero!!',
            imageUrl: 'https://wallpapercave.com/wp/wp7082894.jpg',
            createdDate: new Date(),
            snaps: 0
          }
      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap =>faceSnap.id === faceSnapId);
        if (!faceSnap) {
          throw new Error('FaceSnap not found!');
        } else {
          return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType ==='snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
  
  }
  
  

