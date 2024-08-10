import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AssetUrlPipe } from "../../shared/pipes/asset-url.pipe";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeComponent, AssetUrlPipe],
			providers: [provideRouter([])],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should display personal information", () => {
		const nameElement = fixture.debugElement.query(By.css("h3")).nativeElement;
		const roleElement = fixture.debugElement.query(
			By.css(".text-muted"),
		).nativeElement;
		const welcomeMessageElement = fixture.debugElement.queryAll(
			By.css(".profile-card p"),
		)[1].nativeElement;

		expect(nameElement.textContent).toContain(component.personalInfo.name);
		expect(roleElement.textContent).toContain(component.personalInfo.role);
		expect(welcomeMessageElement.textContent).toContain(
			component.personalInfo.welcomeMessage,
		);
	});

	it("should display Angular skills", () => {
		const angularSkillsElements = fixture.debugElement.queryAll(
			By.css(".col-md-6:nth-child(1) .info-card ul li"),
		);

		angularSkillsElements.forEach((element, index) => {
			expect(element.nativeElement.textContent).toBe(
				component.angularSkills[index],
			);
		});
	});

	it("should display other skills", () => {
		const otherSkillsElements = fixture.debugElement.queryAll(
			By.css(".col-md-6:nth-child(2) .info-card ul li"),
		);

		otherSkillsElements.forEach((element, index) => {
			expect(element.nativeElement.textContent).toBe(
				component.otherSkills[index],
			);
		});
	});

	it("should display work experience", () => {
		const workExperienceElements = fixture.debugElement.queryAll(
			By.css(".info-card div h4"),
		);

		workExperienceElements.forEach((element, index) => {
			expect(element.nativeElement.textContent).toContain(
				component.workExperience[index].companyName,
			);
		});

		const workDescriptionElements = fixture.debugElement.queryAll(
			By.css(".info-card div p"),
		);
		workDescriptionElements.forEach((element, index) => {
			const work = component.workExperience[index];
			expect(element.nativeElement.textContent).toContain(work.position);
			expect(element.nativeElement.textContent).toContain(work.period);
			expect(element.nativeElement.textContent).toContain(work.location);
			expect(element.nativeElement.textContent).toContain(work.overview);
			expect(element.nativeElement.textContent).toContain(work.team);
			expect(element.nativeElement.textContent).toContain(
				work.responsibilities,
			);
			expect(element.nativeElement.textContent).toContain(work.achievements);
			expect(element.nativeElement.textContent).toContain(work.technologies);
		});
	});
});
