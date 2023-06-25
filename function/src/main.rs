fn main() {
    println!("Hello, world!");
    another_function(5,'g');
    let y = 6;
    let z = {
        let x = 3;
        x + 1
    };
    println!("{z}");
    let x = five();
    let s = six();
    let p = plus_one(6);
    println!("{x}-{s}-{p}");
}

fn another_function(x:i32, unit_label: char){
    println!("函数的x为:{x},传入的uni为:{unit_label}");
}
fn five() -> i32 {
   return 5
}
fn six() -> u32 {
    6
}
fn plus_one(x: i32) -> i32 {
    x + 1
}