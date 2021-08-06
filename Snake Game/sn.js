{
    var A = []
    var Prev = 0
    A.push({ x: 2, y: 1 })
    A.push({ x: 1, y: 1 })
    var count = 1
    var dir = "right"
    var urn = { x: getX(), y: getY() }
    var w = (urn.x).toString() + (urn.y).toString()
    if (urn.x == "11" || urn.x == "12" || urn.x == "13" || urn.x == "21" || urn.x == "22" || urn.x == "23") {
        w = w + "'"

    }
    document.getElementById("div" + w).style.backgroundColor = "blue"
    function getX() {
        return Math.floor(Math.random() * (28)) + 1;
    }
    function getY() {
        return Math.floor(Math.random() * (32)) + 1;
    }
    function btn() {
        document.getElementById("hdi1").style.display = "none"
        document.getElementById("hdi").className = ""
        for (i = 0; i < A.length; i++) {
            var z = (A[i].x).toString() + (A[i].y).toString()
            if (A[i].x == "11" || A[i].x == "12" || A[i].x == "13" || A[i].x == "21" || A[i].x == "22" || A[i].x == "23") {
                z = z + "'"

            }
            document.getElementById("div" + z).style.backgroundColor = "black"
        }
        document.getElementById("div" + w).style.backgroundColor = "black"
        A = []
        A.push({ x: 2, y: 1 })
        A.push({ x: 1, y: 1 })
        count = 1
        dir = "right"
        urn = { x: getX(), y: getY() }
        w = (urn.x).toString() + (urn.y).toString()
        if (urn.x == "11" || urn.x == "12" || urn.x == "13" || urn.x == "21" || urn.x == "22" || urn.x == "23") {
            w = w + "'"

        }
        document.getElementById("div" + w).style.backgroundColor = "blue"
        my = setInterval(bt, 200)
        var B = []
        addEventListener("keydown", function (e) {
            B.push(e)
        })
        addEventListener("keyup", function () {
            func1(B[0])
            B = []
        })
    }
    function func1(e) {
        if (e.keyCode == 39 && dir != "left") {
            dir = "right"
        }
        else if (e.keyCode == 38 && dir != "down") {
            dir = "up"
        }
        else if (e.keyCode == 37 && dir != "right") {
            dir = "left"
        }
        else if (e.keyCode == 40 && dir != "up") {
            dir = "down"
        }

    }
    function func2() {
        var chk = false
        for (var i = 0; i < A.length; i++) {
            if (A[i].x == urn.x && A[i].y == urn.y) {
                chk = true
                return chk
            }
        }
        return chk
    }
    function func3(X1, Y1) {
        var chk = false
        for (var i = 0; i < A.length; i++) {
            if (A[i].x == X1 && A[i].y == Y1) {
                chk = true
                return chk
            }
        }
        return chk
    }
    var my = setInterval(bt, 200)
    var B = []
    addEventListener("keydown", function (e) {
        B.push(e)
    })
    addEventListener("keyup", function () {
        func1(B[0])
        B = []
    })
    function bt() {

        for (i = 0; i < A.length; i++) {
            var z = (A[i].x).toString() + (A[i].y).toString()
            if (A[i].x == "11" || A[i].x == "12" || A[i].x == "13" || A[i].x == "21" || A[i].x == "22" || A[i].x == "23") {
                z = z + "'"

            }
            document.getElementById("div" + z).style.backgroundColor = "red"
        }
        var X = A[0].x
        var Y = A[0].y
        if (dir == "right") {
            if (X == 28) {
                X = 1
            }
            else {
                X = X + 1
            }
        }
        else if (dir == "left") {
            if (X == 1) {
                X = 28
            }
            else {
                X = X - 1
            }
        }
        else if (dir == "down") {
            if (Y == 32) {
                Y = 1
            }
            else {
                Y = Y + 1
            }
        }
        else if (dir == "up") {
            if (Y == 1) {
                Y = 32
            }
            else {
                Y = Y - 1
            }
        }
        if ((X == urn.x && Y == urn.y) || func2()) {
            if (func3(X, Y)) {
                document.getElementById("hdi").className = "enableBlur"
                if (Prev < A.length) { Prev = A.length }
                document.getElementById("hdi1").innerHTML = "<p>GAME OVER</p>" + "<p>YOUR SCORE:-" + A.length + "</p>" + "<p>HIGH SCORE:-" + Prev + "</p>" + "<p><button type='button' onclick='btn()'>RESTART</button></p>"
                document.getElementById("hdi1").style.display = "block"
                clearInterval(my)
                CloseEvent("keydown")
            }
            A.unshift({ x: X, y: Y })
            var z = (A[A.length - 1].x).toString() + (A[A.length - 1].y).toString()
            if (A[A.length - 1].x == "11" || A[A.length - 1].x == "12" || A[A.length - 1].x == "13" || A[A.length - 1].x == "21" || A[A.length - 1].x == "22" || A[A.length - 1].x == "23") {
                z = z + "'"

            }
            document.getElementById("div" + z).style.backgroundColor = "black"
            urn = { x: getX(), y: getY() }
            w = (urn.x).toString() + (urn.y).toString()
            if (urn.x == "11" || urn.x == "12" || urn.x == "13" || urn.x == "21" || urn.x == "22" || urn.x == "23") {
                w = w + "'"

            }
            document.getElementById("div" + w).style.backgroundColor = "blue"
        }
        else {
            if (func3(X, Y)) {
                document.getElementById("hdi").className = "enableBlur"
                if (Prev < A.length) { Prev = A.length }
                document.getElementById("hdi1").innerHTML = "<p>GAME OVER</p>" + "<p>YOUR SCORE:-" + A.length + "</p>" + "<p>HIGH SCORE:-" + Prev + "</p>" + "<p><button id='btn' type='button' onclick='btn()'>RESTART</button></p>"
                document.getElementById("hdi1").style.display = "block"
                clearInterval(my)
                CloseEvent("keydown")
            }
            A.unshift({ x: X, y: Y })
            var z = (A[0].x).toString() + (A[0].y).toString()
            if (X == "11" || X == "12" || X == "13" || X == "21" || X == "22" || X == "23") {
                z = z + "'"

            }
            document.getElementById("div" + z).style.backgroundColor = "red"
            if (count >= 2) {
                var z = (A[A.length - 1].x).toString() + (A[A.length - 1].y).toString()
                if (A[A.length - 1].x == "11" || A[A.length - 1].x == "12" || A[A.length - 1].x == "13" || A[A.length - 1].x == "21" || A[A.length - 1].x == "22" || A[A.length - 1].x == "23") {
                    z = z + "'"

                }
                document.getElementById("div" + z).style.backgroundColor = "black"
                A.pop()
            }
        }
        count = count + 1
    }
}