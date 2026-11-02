$(document).ready(function() {
    console.log("jQuery is ready!");
    $("body").css("font-family", "Arial, sans-serif");
    $("#name").css("color", "#a64e75");
    $(".headline").css("font-size", "22px");

    $("#changeText").click(function() {
        $("#title").text("Let's Explore My Coding Journey!");
    });

    $("#lightTheme").click(function() {
        $("body").css({"background-color": "#f7e8ef", "color": "black"});
        $("section").css("background-color", "white");
    });

    $("#darkTheme").click(function() {
        $("body").css({"background-color": "#222", "color": "white"});
        $("section").css("background-color", "#333");
    });

    $("#hide").click(function() { $("#info").hide(); });
    $("#show").click(function() { $("#info").show(); });
    $("#toggle").click(function() { $("#info").toggle(); });

    $("#fadeIn").click(function() { $(".gallery-item").fadeIn(); });
    $("#fadeOut").click(function() { $(".gallery-item").fadeOut(); });
    $("#fadeToggle").click(function() { $(".gallery-item").fadeToggle(); });

    $(".slide-panel").hide();

    $(".slide-heading").click(function() {
        $(this).next(".slide-panel").slideDown(500);
    });

    $(".slide-heading").dblclick(function() {
        $(this).next(".slide-panel").slideUp(500);
    });

    $(".slide-heading").on("contextmenu", function(event) {
        event.preventDefault();
        $(this).next(".slide-panel").slideToggle(500);
    });

    $("#add-skill").click(function() {
        let skill = $("#skill-input").val().trim();
        if (skill !== "") {
            $("<li>").text(skill).appendTo("#skill-list");
            $("#skill-input").val("");
            $("#skill-message").text("Skill added.");
        } else {
            $("#skill-message").text("Please enter a skill.");
        }
    });

    $("#prepend-skill").click(function() {
        let skill = $("#skill-input").val().trim();
        if (skill !== "") {
            $("<li>").text(skill).prependTo("#skill-list");
            $("#skill-input").val("");
            $("#skill-message").text("Skill added to the beginning.");
        } else {
            $("#skill-message").text("Please enter a skill.");
        }
    });

    $("#remove-skill").click(function() {
        $("#skill-list li:last").remove();
    });

    $("#change-link").click(function() {
        $("#social-link").attr("href", "https://www.linkedin.com/");
        $("#social-link").text("Visit My LinkedIn");
    });

    $("#un").on("input", function() {
        let name = $(this).val();
        $("#pn").text("Name: " + name);
    });

    $("#ue").on("input", function() {
        let email = $(this).val();
        $("#pe").text("Email: " + email);
    });

    let isAnimated = false;

    $("#animate-skills").click(function() {
        if (isAnimated === false) {
            $("#html").animate({width: "90%"}, 1000);
            $("#css").animate({width: "80%"}, 1000);
            $("#java").animate({width: "65%"}, 1000);
            $("#jquery").animate({width: "40"}, 1000);
            isAnimated = true;
        } else {
            $(".bar div").stop().animate({width: "0%"}, 1000);
            isAnimated = false;
        }
    });

});
