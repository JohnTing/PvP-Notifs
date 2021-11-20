
function orePriority(item) {
    if (item == Items.copper) {
        return 900;
    }
    if (item == Items.lead) {
        return 850;
    }
    if (item == Items.sand) {
        return 600;
    }
    if (item == Items.coal) {
        return 200;
    }
    if (item == Items.titanium) {
        return 100;
    }
    if (item == Items.thorium) {
        return 0;
    }
    return 0;
} 

// Groups.player.index(1).unit().aimX
function drawMouse() {
    Groups.player.each(cons((e)=>{
        let unit = e.unit();

        if(unit && e != Vars.player) {
            let color = e.team().color;
            let x = e.mouseX;
            let y = e.mouseY;
            if(color && x && y) {

                Drawf.circles(x, y, 6, color);
                Lines.stroke(3, Pal.gray);
                Lines.dashLine(unit.x, unit.y, x, y, Math.round(unit.dst(x, y) / 8));
                Lines.stroke(1, color);
                Lines.dashLine(unit.x, unit.y, x, y, Math.round(unit.dst(x, y) / 8));
            }

        }
    }));
    Draw.reset();
};




module.exports = {
    orePriority: orePriority,
    drawMouse: drawMouse

}
