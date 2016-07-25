export class Init{
    load(){
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            console.log('No Todos Found in Storage...Creating sample todos'); 

        var todos = [
            {
                text: 'Pickup food from supermarket'
            },
            {
                text: 'Dinner with family'
            },
            {
                text: 'Walk the dogs'
            }
        ];

        localStorage.setItem('todos', JSON.stringify(todos));
        return;
    } else {
        console.log("Found Todos...");
    }
    }
}