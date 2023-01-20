import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false;
  file: any = null;
  result:any = '';

  constructor(private fileUploadService : FileUploadService) { }

  ngOnInit(): void {
    this.result='';
  }

  onChange(event : any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable
            }
          this.result = "Total no. Records are uploaded : "+event.result.length;
        }
    );
  }
}
