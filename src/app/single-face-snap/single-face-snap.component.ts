import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {

    const snapId = +this.route.snapshot.params['id'];

    this.buttonText= 'Oh snap!';
  }
  onSnap() {
    if (this.buttonText === 'Oh snap!') {
          this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
          this.buttonText = 'Oops, unsnap!' 
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Oh snap!';
    } 
  }
}
