import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service';

@Controller('directions')
export class DirectionsController {
  constructor(private directionsService: DirectionsService) {}

  @Get()
  getDirections(
    @Query('origin_id') origin_id: string,
    @Query('destination_id') destination_id: string,
  ) {
    return this.directionsService.getDirections(origin_id, destination_id);
  }
}
