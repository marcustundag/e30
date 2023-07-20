//create an array of unodered/unsorted data
const data=[12,45,196,18,500,11,122,20,30,100];
//create a selection sorting algorithm function using arrow function using arrow function
const selectionSort = (data) =>{
        const length=data.length;
        //create swap function
        const swap=(data, minIndex, index)=>{
            ([data[minIndex],data[index]]=[data[index],data[minIndex]]);
        }

        //looping for selecting element to b e compaired
        for (let index = 0; index < length; index++) {
           //var that holds the initial index and changes after iteration
           let minIndex=index;
           //looping for each candidita minimum nelement to be compaired with
            for( let cIndex=index+1; cIndex < length; cIndex++){
                //changing the index of minIndex with the index which contains the smaller value
                if (data[cIndex]<data[minIndex]) {
                    minIndex=cIndex;//5
                } 
            }
            if (minIndex !== index) {
                //create swapping method
                // const temp = data[minIndex]; //contains the value of data minindex
                //data[minIndex] = data[index]; //contains the value of data index
                // data[index] = temp; //contains porevious content of data minIndex
                swap(data,minIndex, index);
            }
        }
        return data;
}

console.log(selectionSort(data));