// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var ObjectTop_Pos = function () {
        //getting the focused element
        var MyActiveElement = document.activeElement;
        //getting the class of the element
        var myAttribute = MyActiveElement.getAttribute('data-tchmi-top');
        //check if the element is a textbox
        if (myAttribute !== "") {
            var POS = Number('myAttribute');
            return (POS);
        }
        else {
            return (999);
        }
    };
    
    TcHmi.Functions.registerFunction('ObjectTop_Pos', ObjectTop_Pos);
})(TcHmi);