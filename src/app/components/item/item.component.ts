import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/image-sizes';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  readonly imageSizes = IMAGES_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
