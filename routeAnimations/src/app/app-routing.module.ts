import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'home',
				component: HomeComponent,
				data: { animationState: 'Home' }
			},
			{
				path: 'contact',
				component: ContactComponent,
				data: { animationState: 'Contact' }
			},
			{
				path: 'about',
				component: AboutComponent,
				data: { animationState: 'About' }
			},
			{
				path: '**',
				redirectTo: 'home'
			}
		]
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}