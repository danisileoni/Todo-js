import { Todo } from "./todo.class";


export class TodoList {
    
    constructor() {
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ){
        this.todos.push(todo);
        this.gaurdarLocalStorage();

    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.gaurdarLocalStorage();
    }

    marcarCompletado( id ) {

        for( const todo of this.todos ) {
            if( todo.id == id ) {
                todo.completado = !todo.completado;
                this.gaurdarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter(todo => !todo.marcarCompletado)
        this.gaurdarLocalStorage();
    }

    gaurdarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage(){
        this.todos = localStorage.getItem('todo')
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];

        this.todos = this.todos.map( obj => Todo.fromJson(obj) )
    }


}