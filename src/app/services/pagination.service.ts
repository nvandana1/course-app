import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  paginate<T>(items: T[], pageNumber: number, pageSize: number): T[] {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  }

  getPageCount(totalItems: number, pageSize: number): number {
    return Math.ceil(totalItems / pageSize);
  }
}
