import {Component} from '@angular/core';
import {Dog} from '../models/dog';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DogService} from '../services/dog.service';
import {VetService} from '../services/vet.service';
import {AdminSessionServiceService} from '../services/admin-session-service.service';

@Component({
    selector: 'app-admin-edit-dog',
    templateUrl: './admin-edit-dog.component.html',
    styleUrls: ['./admin-edit-dog.component.css']
})
export class AdminEditDogComponent {
    dogs: Dog[] = [];

    constructor(private router: Router, private route: ActivatedRoute, private dogservice: DogService, private vetService: VetService, private session: AdminSessionServiceService) {
    }

    ngOnInit(): void {
        if (this.session.getAccess() === "") {
            this.router.navigate(['/login']);
        }
        this.dogservice.getDogs().subscribe((data: Dog[]) => {
            this.dogs = data
        });

        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const id = params['id'];
                console.log('Id' + id)
                this.dogservice.getDogById(id).subscribe(data => {
                    this.newDog = data
                });
            }
        });
    }

    formData = new FormData();
    newDog: Dog = new Dog();

    onUpdate() {
        // Append other form data and send the request
        this.formData.append('dogImage', this.newDog.picture);
        this.formData.append('name', this.newDog.name);
        this.formData.append('age', this.newDog.age.toString());
        this.formData.append('dateOfBirth', this.newDog.dateOfBirth);
        this.formData.append('gender', this.newDog.gender);
        this.formData.append('breed', this.newDog.breed);
        this.formData.append('height', this.newDog.height.toString());
        this.formData.append('weight', this.newDog.weight.toString());
        this.formData.append('medicalConditions', this.newDog.medicalConditions);

        console.log(this.formData);

        // Use the update method from the service instead of create
        this.dogservice.updateDog(this.newDog.id, this.formData).subscribe(
            (response) => {
                console.log(response);
                window.location.reload();
                // Handle the response (e.g., show a success message, navigate to a different page)
            }
        );
    }

    onFileChange(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        const file = inputElement.files?.[0];
        if (file) {
            this.formData.append('dogImage', file);
        }
    }

    editDog(id: Number) {
        this.router.navigate(['/admin/dogs/edit/' + id]);
        window.location.reload();
    }

    deleteDog(id: number) {
        this.dogservice.deleteDog(id).subscribe();
        window.location.reload();
        alert("Your dog has been removed to the list :(");
    }
}
