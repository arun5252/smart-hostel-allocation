// yaha sare rooms store honge
let rooms = [];

// room add karne ka function
function addRoom() {
    let roomNo = document.getElementById("roomNo").value;
    let capacity = parseInt(document.getElementById("capacity").value);
    let hasAC = document.getElementById("ac").checked;
    let hasWashroom = document.getElementById("washroom").checked;

    // validation
    if(roomNo === "" || isNaN(capacity)) {
        alert("Room number aur capacity sahi bharo");
        return;
    }

    // room object banana
    let room = {
        roomNo: roomNo,
        capacity: capacity,
        hasAC: hasAC,
        hasWashroom: hasWashroom
    };

    rooms.push(room); // room array me add
    displayRooms();   // list update
}

// sare rooms dikhane ka function
function displayRooms() {
    let list = document.getElementById("roomList");
    list.innerHTML = "";

    rooms.forEach(r => {
        list.innerHTML += `
        <p>
        Room: ${r.roomNo} | Capacity: ${r.capacity} |
        AC: ${r.hasAC} | Washroom: ${r.hasWashroom}
        </p>`;
    });
}

// room allocate karne ka function
function allocateRoom() {
    let students = parseInt(document.getElementById("students").value);
    let needAC = document.getElementById("needAC").checked;
    let needWashroom = document.getElementById("needWashroom").checked;

    let suitableRooms = rooms.filter(r =>
        r.capacity >= students &&
        (!needAC || r.hasAC) &&
        (!needWashroom || r.hasWashroom)
    );

    if(suitableRooms.length === 0) {
        document.getElementById("output").innerText = "No room available";
        return;
    }

    // smallest capacity wala room select
    suitableRooms.sort((a, b) => a.capacity - b.capacity);

    document.getElementById("output").innerText =
        "Allocated Room: " + suitableRooms[0].roomNo;
}
