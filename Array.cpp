#include <iostream>
#include <array>
using namespace std;

void reverseArray(int (&arr)[7], int size)
{
    int start = 0;
    int end = size - 1;
    while (start < end)
    {
        swap(arr[start], arr[end]);
        end--;
        start++;
    }
}

void sumProduct(array<int, 5> arr)
{
    int sum = 0, product = 1;
    for (int val : arr)
    {
        sum += val;
        product *= val;
    }
    cout << sum << " " << product << endl;
}

void swapMinMax(vector<int> &vec)
{
    int minIndex = 0, max = vec[0];
    int maxIndex = 0, min = vec[0];
    for (int i = 0; i < vec.size(); i++)
    {
        if (vec[i] > max)
        {
            max = vec[i];
            maxIndex = i;
        }
        if (vec[i] < min)
        {
            min = vec[i];
            minIndex = i;
        }
    }
    swap(vec[maxIndex], vec[minIndex]);
    return;
}

void printUnique( array<int,5> arr1){
for(int i = 0; i<5; i++){
    for(int j = i+1; j < 5; j++){
        if(arr1[i] == arr1[j]){
        }
    
    }
}
}

void printIntersection(int (&arr)[7] , array<int,5> arr1){}

// int linearSearch(){};

void reverseVec(vector<int>& vec){
    for(int i = 0; i < vec.size()/2 ; i++){
        swap(vec[i], vec[vec.size() - 1 - i]);
    }
};


void printMaxSubarray(vector<int> vec){

cout<<"Sub-Arrays: "<<endl;

for(int st = 0; st < vec.size(); st++){
    for(int end = st; end < vec.size(); end++){
        for(int k = st; k<= end; k++){
            cout<<vec[k]<<" ";
        }
        cout<<endl;
    }
}
};


int SumMaxSubarray(vector<int> vec) {
    int max_sum = vec[0]; 
    for (int st = 0; st < vec.size(); st++) {
        int curr_sum = 0; 
        for (int end = st; end < vec.size(); end++) {
            curr_sum += vec[end];
            max_sum = max(max_sum, curr_sum);
        }
    }
    return max_sum;
}


int main()
{
    int arr[7] = {1, 2, 3, 4, 5, 6, 7};
    reverseArray(arr, 7);
    for (int i = 0; i < 7; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    array<int, 5> arr1 = {1, 2, 2, 4, 4};
    sumProduct(arr1);
    vector<int> vec = {78,75,57, 0, 90, 15,100};
    reverseVec(vec);
    for(int i = 0; i<vec.size(); i++){
        cout<<vec[i]<<" ";
    };
    swapMinMax(vec);
    for(int val : vec){
        cout<<val<<" ";
    }
    printUnique(arr1);
    printMaxSubarray(vec);
    cout<<"Max Sum: " <<SumMaxSubarray(vec)<<endl;
    
    printIntersection(arr, arr1);

    return 0;
}
