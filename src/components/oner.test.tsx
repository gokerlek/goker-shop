import {
     getValuesOfGivenAttributes,
     concatArray,
     uniqueArray,
     getIdsOfTheTeamMembers,
     view,
     set,
     indexBy,
     createObjectBasedOnPath,
     merge,
} from "./oner";

import { Member, Team } from "./oner";
const testTeams: Team[] = [
     {
          id: "t1",
          name: "team 1",
          members: [
               {
                    id: "m1",
                    name: "mahmut",
               },
               {
                    id: "m2",
                    name: "maho",
               },
          ],
     },
     {
          id: "t2",
          name: "team 2",
          members: [
               {
                    id: "m3",
                    name: "hirbo",
               },
               {
                    id: "m2",
                    name: "maho",
               },
          ],
     },
];
test("should return the ids of the teams", () => {
     expect(getValuesOfGivenAttributes(testTeams, "id")).toEqual(["t1", "t2"]);
});

test("should return the names of the teams", () => {
     expect(getValuesOfGivenAttributes(testTeams, "name")).toEqual([
          "team 1",
          "team 2",
     ]);
});

test("should combine 2 arrays", () => {
     expect(concatArray([1, 2], [1, 4])).toEqual([1, 2, 1, 4]);
});

test("should return unique items", () => {
     expect(uniqueArray([1, 2, 1, 4])).toEqual([1, 2, 4]);
});

test("should return the ids of the team members", () => {
     expect(getIdsOfTheTeamMembers(testTeams)).toEqual(["m1", "m2", "m3"]);
});

test("should get the value of a nested object with a given path", () => {
     expect(view([0, "members", 0, "name"], testTeams)).toEqual("mahmut");
});

test("should get the undefined of a nested object with a given path", () => {
     expect(view([0, "bıdık", "name"], testTeams)).toEqual(undefined);
});
test("should get the first item's members of a nested object with a given path", () => {
     expect(view([0, "members"], testTeams)).toEqual(testTeams[0].members);
});
test("should get the id of a nested object with a given path", () => {
     expect(view(["id"], testTeams[0].members[1])).toEqual("m2");
});

test("should create an object with a given path", () => {
     expect(createObjectBasedOnPath(["id", 0, "name"])).toEqual({
          id: [{ name: undefined }],
     });
     expect(createObjectBasedOnPath([0, "id", 0, "name"])).toEqual([
          { id: [{ name: undefined }] },
     ]);
});

test("should merge 2 objects", () => {
     expect(merge({ id: 1 }, { id: 2, name: "a" })).toEqual({
          id: 2,
          name: "a",
     });
     expect(merge({ id: 1 }, { name: "a" })).toEqual({ id: 1, name: "a" });
     expect(
          merge({ id: 1, name: ["b", "c"], age: 15 }, { name: "a" })
     ).toEqual({ id: 1, name: "a", age: 15 });
});

test("should set the value of a nested object with a given path", () => {
     const updatedTestTeams = set(
          ["members", 0, "name"],
          "hatice",
          testTeams[0]
     );
     expect(view(["members", 0, "name"], updatedTestTeams)).toEqual("hatice");
     expect(view([0, "members", 0, "name"], testTeams)).toEqual("mahmut");
});

test("should return teams indexed by id", () => {
     expect(indexBy(testTeams, "id")).toEqual({
          t1: {
               id: "t1",
               name: "team 1",
               members: [
                    {
                         id: "m1",
                         name: "mahmut",
                    },
                    {
                         id: "m2",
                         name: "maho",
                    },
               ],
          },
          t2: {
               id: "t2",
               name: "team 2",
               members: [
                    {
                         id: "m3",
                         name: "hirbo",
                    },
                    {
                         id: "m2",
                         name: "maho",
                    },
               ],
          },
     });
});
