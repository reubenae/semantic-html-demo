const start = () => {
    const ids = ["Box1", "Box2", "Box4", "Box6", "Box7", "Box8", "Box9"];
    ids.forEach(id => {
        addEventListener(id);
    })
}

const getValueById = id => {
    const row = document.getElementById(id);
    const value = row.getElementsByClassName("value")[0];
    return parseFloat(value.innerHTML);
}

const updateCalculatedBoxes = () => {
    const box3Row = document.getElementById("Box3");
    const box3ValueElement = box3Row.getElementsByClassName("value")[0];
    const box5Row = document.getElementById("Box5");
    const box5ValueElement = box5Row.getElementsByClassName("value")[0];

    const box1Value = getValueById("Box1");
    const box2Value = getValueById("Box2");
    if (!Number.isNaN(box1Value) && !Number.isNaN(box2Value)) {
        box3ValueElement.innerHTML = box1Value + box2Value;
    } else {
        box3ValueElement.innerHTML = "Box 1 + Box 2";
    }

    const box3Value = getValueById("Box3");
    const box4Value = getValueById("Box4");
    if (!Number.isNaN(box3Value) && !Number.isNaN(box4Value)) {
        box5ValueElement.innerHTML = box3Value - box4Value;
    } else {
        box5ValueElement.innerHTML = "Box 3 - Box 4";
    }
}

const addEventListener = id => {
    const row = document.getElementById(id);
    const value = row.getElementsByClassName("value")[0];
    value.addEventListener("blur", () => {
        updateCalculatedBoxes()
    })
};