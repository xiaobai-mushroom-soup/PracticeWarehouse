fn main() {
    // let s = "hello";
    // println!("{s}");

    // let mut s = String::from("这是一段用String声明的字符串");

    // println!("{s}");
    // s.push_str(",hahahah");
    // println!("{s}");
    let mut s1 = String::from("test");
    // let s2 =  test(s1);
    // println!("{}sss",s2);
    
    calculate_length(&mut s1);
    // let len = calculate_length(&s1);
    // println!("{}-is{}",s1,len);
    let reference_to_nothing = dangle();
}
// fn test (str:String)-> String{
//      str
// }

fn calculate_length(s:&mut String) {
    // s.len()
    s.push_str("123");
}

fn dangle() -> String{
    let s = String::from("hello");

    s
}