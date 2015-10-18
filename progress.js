var ractive = new Ractive({
    el: document.body,
    template: '#template',
    data: {
        progressbars: [
            { name: 'Progress bar 1', value: 0 },
            { name: 'Progress bar 2', value: 0 },
			{ name: 'Progress bar 3', value: 0 }
		//	{ name: 'P4', value: 0 }
//4 progress bars
        ],
        amounts: [  +10, +25, -10, -25 ]
    },
    adjust: function ( d ) {
        var selected = this.get( 'selectedProgress' );
        if ( selected == null ) return;
        
        var keypath = 'progressbars[' + selected + '].value';
     //   this.add( keypath, d );
        
         var progressbarvalue = this.get(keypath);
        var zeroffset = progressbarvalue + d;
        if( zeroffset > 0 )
           this.add( keypath, d );
        else
           this.subtract( keypath, progressbarvalue);
    }
});