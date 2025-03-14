import { defineField, defineType } from "sanity";

export const skills = defineType({
    name:'skills',
    title:'Skills',
    type:'document',
    fields:[
        defineField({
            name: 'skillsList',
            title: 'Skills',
            type:'array',
            of:[{
                type:'object',
                fields:[
                    defineField({
                        name:'name',
                        title:'Skill Name',
                        type:'string',
                        validation: (rule) => rule.required(),
                    }),
                    defineField({
                        name:'iconClass',
                        title:'Icon Class',
                        type:'string',
                        validation: (rule) => rule.required(),
                    }),
                ],
            }],
        }),
    ]
});