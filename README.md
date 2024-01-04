Assignment 7: Course Registration

3 Project Features:
    * You can select courses from a selected list of courses which is provided through JSON
    * You can only add a course a single time, multiple selection will show a toast to warn the user
    * You can select a maximum of 20 credit hour, if your credit hour exceeds this number a toast will be shown to warn the user


State Management:
    We needed to show some courses and there was a button in each course card which allows the course to be added to the cart. The same button would also update the total credit hour, price and remaining credit hour whenever applicable. So we loaded all the courses in Courses.jsx through useEffect from a JSON file. A courses useState was declared to contain all the courses in Courses.jsx ;
    
    Each course then created a separate Course component. Each course component had a select button upon clicking which course list,total price, credit hour these needed to be updated. As these data will be shown in a separate component named Cart. So we created courseList,creditCount,totalPrice states in App.jsx. Updated their data when select button is pressed and when conditions are satisfied and then passed the state into Cart.jsx as props