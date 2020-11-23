import Marionette from 'backbone.marionette';
import AppLayout from './views/app_layout'

const App = Marionette.Application.extend({
  region: '#app',
  onStart: (app, _options) => app.showView(new AppLayout)
});

export default App;
