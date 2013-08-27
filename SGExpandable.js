/**
 * Created with PyCharm.
 * User: selcuk
 * Date: 7/3/13
 * Time: 1:04 AM
 * To change this template use File | Settings | File Templates.
 */
(function ( $ ) {
    $.fn.SGExpandable = function(caption) {
        this.shown = false;
        this.active = true;
        var childWidth = this.width();
        this.hide();
        $(this).css({float:"left"});
        this.caption = caption;
        //    this.attr('id')+"_SGExp";
        //DEBUGconsole.log(caption);
        var childId = $(this).attr('id');
        var frameId = childId + "_SGExpFrm";
        var expButtonId = this.attr('id')+'_SGExpButton';
        $("#"+frameId).width(childWidth);
        this.wrap('<div id=' + frameId +'></div>');
        //DEBUGconsole.log(frameId);
        $("#"+frameId).prepend('<div id=' + expButtonId +  ' class="SGExpandable">'+caption  +'</div>');
        var element = this;
        $("#"+expButtonId).click(function(){
            //DEBUGconsole.log("just clicked", expButtonId);
            if (this.shown) {
                element.hide();
                $("#"+expButtonId).removeClass("expanded");
                this.shown = false;
            } else {
                element.show();
                $("#"+expButtonId).addClass("expanded");
                this.shown = true;
            }

        });
        return $("#"+frameId);
    };

}( jQuery ));
