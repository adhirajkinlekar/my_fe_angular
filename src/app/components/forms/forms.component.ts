import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  data: any[] = [];

  form!: FormGroup;
  
  get tasks() {
    return (<FormArray>this.form.get('tasks')).controls;
  }

  getGroupsFor(index: number) {
    return (<FormArray>(<FormArray>this.form.get('tasks')).controls[index].get('groups')).controls;
  }

  getDictionaryFor(index: number) {
    return (<FormArray>(<FormArray>this.form.get('tasks')).controls[index].get('dictionary')).controls;
  }

  getAttributesFor(taskIndex: number, groupIndex: number) {
    return (<FormArray>(<FormArray>(<FormArray>this.form.get('tasks')).controls[taskIndex].get('groups')).controls[groupIndex].get('attributes')).controls;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loadData();
    this.form = this.fb.group({
      lessoncode: 'TMM',
      countrycode: 'CA',
      languagecode: 'en',
      tasks: this.fb.array(this.getTasks())
    });
  }

  getTasks () {
    return this.data.map(task => this.fb.group({
      taskid: task.taskid,
      taskname: task.taskname,
      groups: this.fb.array(this.getGroups(task.groups)),
      dictionary: this.fb.array(this.getDictionaries(task.dictionary))
    }));
  }

  getDictionaries(dictionaries: any[]) {
    return dictionaries.map(dictionary => this.fb.group({
      content_id: dictionary.content_id,
      term: dictionary.term,
      translation_id: dictionary.translation_id,
      value: dictionary.value,
      task_id: dictionary.task_id,
      task_dictionary_id: dictionary.task_dictionary_id,
      isnew: dictionary.isnew,
      altered: dictionary.altered
    }));
  }

  getGroups(groups: any[]) {
    return groups.map(group => this.fb.group({
      id: group.id,
      name: group.name,
      attributes: this.fb.array(this.getAttributes(group.attributes))
    }));
  }

  getAttributes(attributes: any[]) {
    return attributes.map(attribute => this.fb.group({
      name: attribute.name,
      contentid: attribute.contentid,
      value: attribute.value,
      translationvalue: attribute.translationvalue,
      placeholder: attribute.placeholder,
      label: attribute.label,
      defaultvalue: attribute.defaultvalue,
      type: attribute.type,
      element: attribute.element,
      altered: attribute.altered,
      translation_id: attribute.translation_id,
      isnew: attribute.isnew
    }));
  }

  loadData() {
    this.data = [{
        "taskid": 31,
        "taskname": "intro",
        "groups": [{
          "id": 223,
          "name": "Fullscreen Image and Sub-Heading",
          "attributes": [
            {
              "name": "Sub-Heading",
              "contentid": 155,
              "value": "Driver Attitude",
              "translationvalue": "Actitud del conductor",
              "placeholder": "Type Heading",
              "label": "Sub-Heading",
              "defaultvalue": "",
              "type": "text",
              "element": "input",
              "altered": false,
              "translation_id": 3064,
              "isnew": false
            },
            {
              "name": "Full-Screen Image",
              "contentid": 211,
              "value": "/media/lessons/dst/intro/image01-right.jpg",
              "translationvalue": null,
              "placeholder": "Image Url",
              "label": "Full-Screen Image",
              "defaultvalue": "",
              "type": "image",
              "element": "input",
              "altered": false,
              "translation_id": null,
              "isnew": true
            }
          ]
        }],
        "dictionary": [{
          "content_id": 5,
          "term": "Continue",
          "translation_id": 3065,
          "value": "Continuar",
          "task_id": 31,
          "task_dictionary_id": 11,
          "isnew": 0,
          "altered": 0
        }]
      },
      {
        "taskid": 32,
        "taskname": "question-1",
        "groups": [{
          "id": 228,
          "name": "Question",
          "attributes": [{
              "name": "Question Text",
              "contentid": 956,
              "value": "Welcome to the Multitasking exercise. Before we begin, please select the statement that best describes your current view on the subject.",
              "translationvalue": "Bienvenido al ejercicio sobre realización de varias tareas al mismo tiempo. Antes de comenzar, seleccione la afirmación que mejor describa su opinión actual sobre el tema.",
              "placeholder": "Question Text",
              "label": "Question Text",
              "defaultvalue": "",
              "type": "textarea",
              "element": "textarea",
              "altered": false,
              "translation_id": 3462,
              "isnew": false
            },
            {
              "name": "Randomize Answers",
              "contentid": 1100,
              "value": "1",
              "translationvalue": null,
              "placeholder": "Randomize Answers",
              "label": "Randomize Answers",
              "defaultvalue": "2",
              "type": "truefalse",
              "element": "select",
              "altered": false,
              "translation_id": null,
              "isnew": true
            }
          ]
        }],
        "dictionary": []
      }
    ];
  }
}
