import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {EpisodeHeroComponent, PersonCoinComponent} from '@ngair-platform/website/common-ui';

storiesOf('Episode Hero', module).add('with full episode info', () => ({
  component: EpisodeHeroComponent,
  moduleMetadata: {
    declarations: [PersonCoinComponent]
  },
  props: {
    episode: {
      id: '154',
      title: 'Future of State Management',
      videoUrl: '',
      dateTime: '',
      hosts: [{fullName: 'Justin Schwartzenberger'}],
      guests: [{fullName: 'Austin McDaniel'}],
      panelists: [{fullName: 'Mike Brocchi'},{fullName: 'Alyssa Nicoll'},{fullName: 'Bonnie Brennan'}]
    }
  }
}));
