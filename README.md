# vue-todolist

Descrizione: Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1 Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3 Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus: 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

---

Milestone 1:

1. Creo la struttura HTML e la stilizzo
2. Creo l'array di oggetti in VueJS e lo mostro come lista in HTML
3. Se l'item è uguale a true aggiungo la classe che mi permette di sbarrare la scritta

Milestone 2:

1. Aggiungo l'icona x a fianco ad ogni item
2. Creo la funzione che mi permette di rimuovere l'item dalla lista
3. Creo l'evento click sulla x e chiamo la funzione

Milestone 3:

1. Aggiungo il campo input testuale ed il pulsante all'interno del DOM
2. Creo la funzione che mi permette di aggiungere il testo inserito in input all'interno della lista
