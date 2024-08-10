import { Pipe, type PipeTransform } from "@angular/core";
import { assetUrl } from "../../../../single-spa/asset-url";

@Pipe({ name: "assetUrl", standalone: true })
export class AssetUrlPipe implements PipeTransform {
	transform(value: string): string {
		return assetUrl(value);
	}
}
