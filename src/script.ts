// Задание типов данных

const int: number = 1.123;
const str: string = "some string";
const bool: boolean = false;
const nothing: null = null;
const def: undefined = undefined;
const obj: object = {};

/* ============================================================================================== */

// Функции

const voidFunc = (params: object): void => {
    console.log("Ничего не возвращает");
};

const anyFunc = (): any => {
    console.log("Может вернуть все");
    return 1;
};

const neverFunc = (): never => {
    while (true) {
        console.log("Выполняеться всегда");
    }
};
const error = (): never => {
    throw new Error("ERROR!");
};

const spreadOp = (name: string, ...skills: string[]): void => {};
const defaultValue = (name: string = "Nick"): void => {};

/* ============================================================================================== */

// Массивы;

/* 1 */ const arr: any[] = [1, 2, 3, 4, 5, "6", {}, false];
/* 2 */ const arr2: Array<any> = [1, 2, 3, 4, 5, "6", {}, false];

/* Tuple */ const arr3: [string, number] = ["string", 2];

/* ============================================================================================== */

// Новые типы данных

// void - функция ничего не возвращает
// any - переменная может иметь любой тип данных, и можно изменять на любой тип
// never - функция либо вызовит ошибку, либо будет бесконечно вызываться
// | - тип объединение
// & - тип чегото

/* ============================================================================================== */

// type - кастномный тип данных

type Name = string | number;

const str2: Name = "";

/* ============================================================================================== */

// Enum - тип данных, смесь объекта и массива, можно обращаться по ключу и по индексу

enum num {
    one = 1,
    two,
    three,
    four,
}

console.log(num);

enum urls {
    yt = "https://youtube.com",
    fb = "https://facebook.com",
}
console.log(urls.yt);

/* ============================================================================================== */

// Объекты

type person = { name: string; age: number };

const user: person & { getInfo: () => string } = {
    name: "Jamshud",
    age: 15,
    getInfo() {
        return `Name: ${this.name}\nAge: ${this.age}`;
    },
};

const user2: person = {
    name: "Andrey",
    age: 11,
};

console.log(user.getInfo());

/* ============================================================================================== */

// Интрефейсы

// интерфейсы - это шаблон для объектов

interface Rect {
    readonly id: number;
    color?: string;
    size: {
        width: number;
        height: number;
    };
}

const rect: Rect = {
    id: 1,
    size: {
        width: 20,
        height: 15,
    },
};

const rect2: Rect = {
    id: 2,
    color: "red",
    size: {
        width: 40,
        height: 50,
    },
};

const rect3 = {
    id: 3,
    color: "blue",
    size: {
        width: 20,
        height: 30,
    },
} as Rect;

const rect4 = <Rect>{
    id: 4,
    size: {
        width: 25,
        height: 30,
    },
};

/* ------------------------------------ */

// Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea(): number;
}

const rect5: RectWithArea = {
    id: 5,
    size: {
        width: 30,
        height: 45,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    },
};

/* ------------------------------------ */

// Имплементация классов от интерфейсов

interface IUserInfo {
    name: string;
    age: number;
    getInfo: () => IGetInfo;
}

interface IGetInfo {
    name: string;
    age: number;
}

class UserInfo implements IUserInfo {
    constructor(public name: string, public age: number) {}

    getInfo(): IGetInfo {
        return { name: this.name, age: this.age };
    }
}

const jamshud = new UserInfo("Jamshud", 15);

console.log(jamshud.getInfo());

/* ------------------------------------ */

interface Styles {
    [key: string]: string | number;
    // key - ключ свойства, стоит указать как string
    // Такая запись лучше если очень много ключей
}

const css: Styles = {
    borger: "1px solid red",
    marginTop: 20,
};

/* ------------------------------------ */

// Перегрузка функций

interface Position2D {
    x: number | undefined;
    y: number | undefined;
}

interface Position3D extends Position2D {
    z: number | undefined;
}

function position(a: number, b: number): Position2D;
function position(a: number, b: number, c: number): Position3D;

function position(a?: number, b?: number, c?: number) {
    return !c ? { x: a, y: b } : { x: a, y: b, z: c };
}

console.log(position(5, 10));

/* ============================================================================================== */

// Классы

class Rectagnle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): string {
        return this.width * this.height + "m2";
    }

    getPerimetr(): string {
        return (this.width + this.height) * 2 + "m";
    }
}

const rectagnle = new Rectagnle(20, 10);

console.log(rectagnle.getArea());
console.log(rectagnle.getPerimetr());

/* ============================================================================================== */

// Наследование классов и модификаторы

class Animal {
    protected voice: string | undefined;
    public color: string = "";
    protected isPet: boolean | undefined;

    private go(): void {
        console.log("GO");
    }
}

class Cat extends Animal {
    constructor(voice: string, isPet: boolean) {
        super();
        this.voice = voice;
        this.isPet = isPet;
    }

    setColor(color: string): void {
        this.color = color;
    }
}

const cat = new Cat("Мяу", true);

cat.setColor("black");
console.log(cat);

/* ------------------------------------ */

// Абстрактные классы

abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class App extends Component {
    render(): void {
        console.log("App is rendered");
    }

    info(): string {
        return "Info";
    }
}

/* ============================================================================================== */

// Guards

function increase(num: number | string) {
    if (typeof num === "number") {
        return num + 1;
    }

    return parseInt(num) + 1;
}

console.log(increase(3));
console.log(increase("3"));

/* ------------------------------------ */

class MyResponse {
    headers: { [key: string]: string } = { "Content-type": "text" };
    ok: boolean = true;
    result: string = JSON.stringify([{ id: "1", name: "Jamshud" }]);
}

class MyError {
    headers: { [key: string]: string } = { "Content-type": "text" };
    ok: boolean = false;
    error: string = "Error 404: page not found(";
}

function request(res: MyError | MyResponse): string {
    if (res instanceof MyResponse) {
        return res.result + " success";
    }

    return res.error + " error";
}

const response = new MyResponse();
const notFound = new MyError();

console.log(request(response));
console.log(request(notFound));

/* ------------------------------------ */

type ButtonTypes = "primary" | "secondary" | "default";

function Button(type: ButtonTypes): void {
    if (type === "primary") {
        console.log("This is primary button!");
    } else if (type === "secondary") {
        console.log("This is secondary button!");
    } else {
        console.log("This is defult button");
    }
}

Button("primary");

/* ============================================================================================== */

// Generic

const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 7, 8, 9];
const arrayOfStrings: Array<string> = ["Hello", "World!"];

function reverse<Arr>(array: Arr[]): Arr[] {
    return array.reverse();
}

const reverse2 = <Arr>(array: Arr[]): Arr[] => {
    return array.reverse();
};

/* ============================================================================================== */

// Операторы

// keyof - вытаскивает из интерфейса все ключи

interface Car {
    model: any;
    year: any;
}

type CarKeys = keyof Car; // "model" | "year"

const key: CarKeys = "model";
// key = "name" - error

/* ------------------------------------ */

// Exclude - исключает все перечисленные ключи после запятой
// Pick - выбирает все перечисленные ключи после запятой

type User = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
};

type UserKeysNoMeta = Pick<User, "name" | "email">; // { name: string, email: string };
type UserKeysNoMeta2 = Exclude<keyof User, "id" | "createdAt">; // "name", "email"

let u1: UserKeysNoMeta = { name: "Jamshud", email: "jamshud@gmail.com" };

let u2: UserKeysNoMeta2 = "email";
// user2 = 2 - error
