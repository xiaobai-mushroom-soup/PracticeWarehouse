use std::io;

fn main() {
    // 不变性
    // let x = 5;
    // println!("x的值为：{x}");
    // x = 6;
    // println!("x的值为：{x}");
    // 允许改变
    // let mut x = 5;
    // println!("x的值为：{x}");
    // x = 6;
    // println!("x的值为：{x}");
    // 常量
    // const THREE_HOUSE_IN_SECONDS: u32 = 60 * 60 * 3;

    // let x = 5;
    
    // println!("x的值为：{x}");
    // let x = x + 1;

    // println!("x的值为：{x}");
    // {
    //     let x = x * 2;
    //     println!("x的值为：{x}");
    // }
    // println!("x的值为：{x}");

    // let spaces = "      ";
    // let spaces = spaces.len();
    // println!("{spaces}");
    // // let mut spaces = "      ";
    // // spaces = spaces.len();
    // // println!("{spaces}");
    // let sign:i8 = -2;
    // // let sign:u8 = 2;
    // println!("{sign}");

    // let x = 2.0;

    // let y:f32 = 3.0;

    // println!("{x}-{y}");


    // let sum = 5 + 10;

    // let difference = 95.5 -4.3;

    // let product = 4 * 30;

    // let quotinent = 56.7 / 32.2;

    // let truncated = -5 / 3;

    // let remainder = 43 % 5;

    // println!("sum:{sum},difference:{difference},product:{product},quotinent:{quotinent},truncated:{truncated},remainder:{remainder}");

    // let t = true;
    // let f:bool = false;
    // println!("t:{t},f:{f}");

    // let c = 'z';
    // let z:char = 'Z';
    // let heart_eyed_cat = '😈' ;
    // println!("heart_eyed_cat:{heart_eyed_cat}");

    // let tup:(i32,f64,u8) = (500,6.4,1);
    // let (x, y , z) = tup;
    // println!("tup:{y}");

    // let testa:[i32;3] = [1,2,3];

    let testb = [1,2,3,4,5,6,7];
    println!("请输入一个数组下标");

    let mut index = String::new();

    io::stdin()
    .read_line(&mut index)
    .expect("error");

    let index: usize = index 
    .trim()
    .parse()
    .expect("err");

    let element = testb[index];

    println!("{index}---{element}");

}
