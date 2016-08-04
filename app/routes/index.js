import Ember from 'ember';

export default Ember.Route.extend({
    example: Ember.inject.service(),

    onInit: Ember.on("init", function() {
        this.get("example");
    })
});
