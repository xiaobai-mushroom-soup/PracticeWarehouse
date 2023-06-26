fn main() {
    // let number:u8 = 3;

    // if number < 5 {
    //     println!("5");
    // } else if number < 4 {
    //     println!("4");
    // } else if number < 3 {
    //     println!("4");
    // } else {
    //     println!("done");
    // }
    // let condition = true;
    // let num = if condition { 5 } else { 6 };
    // println!("{num}hhh");

    // loop {
    //     println!("again");
    // }
    // let mut counter = 0;
    
    // let result = loop {
    //     counter += 1;
    //     if counter == 10 {
    //         break counter * 2;
    //     }
    // };
    // println!("counter:{counter}---result:{result}");

    let mut count = 0 ;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }
        count += 1;
    }
    println!("end ={count}");

    let mut num = 3;

    while num != 0 {
        println!("{num}");

        num -= 1;
    }
    println!("stop!");

    let a = [10, 20, 30, 40, 50];
    let mut index = 0;
    while index < 5 {
        println!("num={}", a[index]);
        index += 1;
    }
    println!("-----------");

    for element in a {
        println!("{element}");
    }
}
