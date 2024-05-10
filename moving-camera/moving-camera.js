let initialAngle = prompt("Initial Angle: ");
let commands = prompt("Commands: ");
let angle = 0;
let height = 0;

for (let i = 0; i < commands.length; i++)
{
    let singleCommand = commands.charAt(i);
    switch (singleCommand)
    {
        case 'R':
            angle = angle + 30;
            break;
        case 'L':
            angle = angle - 30;
            break;
        case 'U':
            height++;
            break;
        case 'D':
            height--;
            break;
        default:
            break;
    }
}

alert("Final Angle: " + angle + "\nFinal Elevation: " + height);