import { Injectable } from '@angular/core';

declare const gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GaService {

  reportSlideshow(caption: string) {
    gtag('event', this.mapCaptionToTarget(caption), {
      'event_category': 'slideshow',
    });
  }

  reportOutbound(url: string) {
    gtag('event', url, {
      'event_category': 'outbound',
      'transport_type': 'beacon',
    });
  }

  private mapCaptionToTarget(caption: string): string {
    switch (caption) {
      case 'Personal Site Demo': {
        return 'Project Demo: Personal Site';
      }
      case 'Todo List Demo': {
        return 'Project Demo: Mathangs';
      }
      case 'Coupon Generator Demo': {
        return 'Project Demo: Lowes10';
      }
      case 'Degree': {
        return 'Education: Degree';
      }
      case 'Checking out the new tour bus at SXSW': {
        return 'Experience: IndieParty';
      }
      case 'At the wholesale market talking to vendors': {
        return 'Experience: OrderWithMe';
      }
      case 'Original Cast Members': {
        return 'Experience: Nihaoareyou';
      }
      case 'Live Event Setup': {
        return 'Experience: ShangBy';
      }
      case 'The Better Half': {
        return 'Personal: Family';
      }
      case 'Buddies Back Home': {
        return 'Personal: Friends';
      }
      case 'We fostered and helped animals find new homes': {
        return 'Personal: Community';
      }
      default:
        return 'unknown slideshow';
    }
  };
}
