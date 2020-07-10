var aufgabe10;
(function (aufgabe10) {
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                aufgabe10.todos.unshift({
                    text: wildcard,
                    isChecked: false
                });
                aufgabe10.drawListToDOM();
            }
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
    });
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=playgroud-artyom-script.js.map