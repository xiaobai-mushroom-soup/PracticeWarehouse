fn main() {
   let num = temperature(32.0);
   println!("{num}");
}

fn temperature(tem:f64)-> f64{
        tem * 1.8 +32.0
}