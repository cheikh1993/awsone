import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncat'
})
export class SortedPipe implements PipeTransform {
    transform(value: any, limit: number = 20) {
        if (!value) return
        return value.length > limit ? value.substring(0, limit) + '...' : value
    }

}