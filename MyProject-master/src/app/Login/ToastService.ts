import {Injectable} from '@angular/core';
import {ToastaService} from 'ngx-toasta';
declare var toaster: any;

@Injectable()
export class ToasterService {
 toast: any;
  constructor(private toastaService: ToastaService) {}
  Success(title: string, message?: string) {
    toaster.success(title, message);
  }
  Warning(title: string, message?: string) {
    toaster.warning(title, message);
  }
  Error(title: string, message?: string) {
    toaster.error(title, message);
  }
  Info(title: string, message?: string) {
    toaster.info(title, message);
  }
}
