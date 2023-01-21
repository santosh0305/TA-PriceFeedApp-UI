import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PriceData } from 'src/app/models/price';
import { PricefeedService } from 'src/app/services/pricefeed.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'StoreId','SKU', 'ProductName', 'ProductPrice','Date'];
  dataSource: MatTableDataSource<PriceData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pricefeedService : PricefeedService) {
    this.pricefeedService.getAll().subscribe((response : any)=>{
      const data: any[] | undefined = [];
      response.result.map((price : any)=>{
        data.push(price);
      })
      
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngOnInit(){
    this.pricefeedService.getAll().subscribe((response : any)=>{
      const data: any[] | undefined = [];
      response.result.map((price : any)=>{
        data.push(price);
      })
      
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}