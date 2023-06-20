
use rand::Rng;
use std::cmp::Ordering;
use std::io;
fn main() {
    println!("猜这个数字");

    let scret_number = rand::thread_rng().gen_range(1..=100);
    
    // println!("随机的数字为：{scret_number}");

loop{
    println!("请输入你的猜测");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    let guess:u32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => continue,
    };

    println!("你的猜测是：{guess}");

    match guess.cmp(&scret_number) {
        Ordering::Less => println!("太小了"),
        Ordering::Greater => println!("太大了"),
        Ordering::Equal => {
            println!("猜对了");
            break;
        }
    }
}
}
