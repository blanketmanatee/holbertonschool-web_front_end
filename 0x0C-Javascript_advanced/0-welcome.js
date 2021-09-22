function welcome(firstName, lastName) {
    function fullName () {
        return firstName + " " + lastName;
    }

    alert ("Welcome " + "fullName()" +'!' );
    return fullName;
}
