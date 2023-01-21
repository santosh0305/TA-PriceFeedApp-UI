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
  showSearchLink = false;

  constructor(private fileUploadService : FileUploadService) { }

  ngOnInit(): void {
    this.result='';
  }

  onChange(event : any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    this.showSearchLink = false;
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
          this.loading = false;
          this.result = "Total count of records uploaded : "+event.result.length;
          this.showSearchLink = true;
        }
    );
  }
}
