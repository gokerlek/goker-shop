export interface Member {
     id: string;
     name: string;
}

export interface Team {
     id: string;
     name: string;
     members: Member[];
}

export function getValuesOfGivenAttributes(
     items: object[],
     key: string
): any[] {
     const values = items.map((item) => {
          return item[key as keyof {}];
     });

     return values;
}

export function concatArray(itemsA: any[], itemsB: any[]): any[] {
     return itemsA.concat(itemsB);
}
export function uniqueArray(items: (string | number)[]): (string | number)[] {
     return [...((new Set(items) as unknown) as (string | number)[])];
}

export function getIdsOfTheTeamMembers(testTeams: Team[]): string[] {
     const ids = testTeams.flatMap((testTeam) =>
          testTeam.members.map((ides) => ides.id)
     );

     const uniqueId = [...((new Set(ids) as unknown) as string[])];

     return uniqueId;
}

export function view(path: (number | string)[], obj: any): any {
     let subObject = obj;

     path.map((pathPiece) => {
          subObject =
               subObject && subObject[pathPiece]
                    ? subObject[pathPiece]
                    : undefined;
     });

     return subObject;
}

export const createObjectBasedOnPath = (
     path: (number | string)[],
     value?: any
): any => {
     let data: any;
     if (typeof path[0] === "string") {
          data = {};
     } else {
          data = [];
     }
     let s: any = data;
     path.forEach((a, i) => {
          if (typeof path[i + 1] === "string") {
               s[a] = {};
          } else if (typeof path[i + 1] === "number") {
               s[a] = [];
          } else {
               s[a] = value;
          }
          s = s[a];
     });
     return data;
};

export const merge = (lefObj: object, rightObj: object): object => {
     const mergeObj = { ...lefObj, ...rightObj };

     return mergeObj;
};

export function set(
     path: (number | string)[],
     value: any,
     obj: object
): object {
     const ali = view(path, obj);
     const hatice: any = createObjectBasedOnPath(path, value);

     const merger = merge(obj, hatice);

     return merger;
}
export function indexBy(items: object[], key: string): { [key: string]: any } {
     const indexer = items.reduce((acc: any, obj: any) => {
          return { ...acc, [obj[key]]: obj };
     }, {});
     return indexer;
}
