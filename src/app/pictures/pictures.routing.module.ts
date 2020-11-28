import { Routes, RouterModule } from '@angular/router';
import { SingleImgPageComponent } from './single-img-page/single-img-page.component';
import { AllPicsPageComponent } from './all-pics-page/all-pics-page.component';
import { OtherImagesComponent } from './other-images/other-images.component';
import { RandomImageComponent } from './random-image/random-image.component';
import { EditPictureComponent } from './edit-picture/edit-picture.component';
import { AddPictureComponent } from './add-picture/add-picture.component';

const routes: Routes = [
    {
        path: 'myGallery',
        pathMatch: 'full',
        component: AllPicsPageComponent,
        data: {
            title: 'My Gallery'
        }
    },
    {
        path: 'myGallery/myImage',
        component: SingleImgPageComponent,
        data: {
            title: 'Single Image'
        }
    },
    {
        path: 'otherImages',
        pathMatch: 'full',
        component: OtherImagesComponent,
        data: {
            title: 'Other images'
        }
    },
    {
        path: 'otherImages/image',
        component: RandomImageComponent,
    },
    {
        path: 'addImage',
        component: AddPictureComponent
    },
    {
        path: 'editImage',
        component: EditPictureComponent
    }

]


export const PicturesRouterModule = RouterModule.forChild(routes);