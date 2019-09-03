//provide slider capability

var spa = (function ( $ ){
    //Module scope variable
    var
    //Set constraints
    configMap = { 
        extended_height : 434, 
        extended_title : 'Click to retract', 
        retracted_height : 16, 
        retracted_title : 'click to extend', 
        template_html : '<div class="spa-slider"><\/div>'
    },
    //declare all other module scope variables
    $chatSlider,
    toggleSlider, onClickSlider, initModule;
    // DOM method /toggleSlider/
    // alternates slider height

    toggleSlider = function () {
        var
            slider_height = $chatSlider.height();

        if ( slider_height === configMap.retracted_height ) {
            $chatSlider
                .animate({ height : configMap.extended_height })
                .attr( 'title', configMap.extended_title );
            return true;    
        }    

        else if ( slider_height === configMap.extended_height ) {
            $chatSlider
                .animate({ height : configMap.retracted_height })
                .attr( 'title', configMap.retracted_title );
            return true;
        }
        return false;
    }

    // Event handler /onClickSlider/
    // recieves click event and calls toggleSlider

    onClickSlider = function( event ) {
        toggleSlider();
        return false;
    };

    //Public method /initModule/
    //sets initial state and provides featute

    initModule = function ( $container ) {
        // render HTML
        //initialize slider height and title
        //bind the user click event to the event handler
        $container.html( configMap.template_html );

        $chatSlider = $container.find( '.spa-slider' );

        $chatSlider
            .attr( 'title', configMap.retracted_title )
            .click( onClickSlider );

        return true;
    };
    return { initModule : initModule };
}( jQuery ));

//Start spa once NOW is ready

jQuery(document).ready(
    function () { spa.initModule( jQuery('#spa') ); }
);
