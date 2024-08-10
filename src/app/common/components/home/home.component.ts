import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { ANGULAR_SKILLS, OTHER_SKILLS } from "../../constants/skills.contants";
import {
	PERSONAL_INFO,
	WORK_EXPERIENCE,
} from "../../constants/work-experience.contants";
import { AssetUrlPipe } from "../../shared/pipes/asset-url.pipe";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [AssetUrlPipe, NgFor],
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
	public personalInfo = PERSONAL_INFO;
	public workExperience = WORK_EXPERIENCE;
	public angularSkills = ANGULAR_SKILLS;
	public otherSkills = OTHER_SKILLS;
}
