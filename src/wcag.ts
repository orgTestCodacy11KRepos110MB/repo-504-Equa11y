export const wcag: any = {
  "principles": [
    {
      "id": "WCAG2:perceivable",
      "num": "1",
      "versions": ["2.0", "2.1"],
      "handle": "Perceivable",
      "title": "Information and user interface components must be presentable to users in ways they can perceive.",
      "guidelines": [
        {
          "id": "WCAG2:text-alternatives",
          "alt_id": ["text-equiv"],
          "num": "1.1",
          "versions": ["2.0", "2.1"],
          "handle": "Text Alternatives",
          "title": "Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.",
          "successcriteria": [
            {
              "id": "WCAG2:non-text-content",
              "alt_id": ["text-equiv-all"],
              "num": "1.1.1",
              "dq_id": ["object-alt", "input-image-alt", "input-button-name", "image-alt", "svg-img-alt", "role-img-alt", "area-alt"],
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Non-text Content",
              "title": "All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Controls, Input",
                      "text": "If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Success Criterion 4.1.2 for additional requirements for controls and content that accepts user input.)"
                    },
                    {
                      "handle": "Time-Based Media",
                      "text": "If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)"
                    },
                    {
                      "handle": "Test",
                      "text": "If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content."
                    },
                    {
                      "handle": "Sensory",
                      "text": "If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content."
                    },
                    {
                      "handle": "CAPTCHA",
                      "text": "If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities."
                    },
                    {
                      "handle": "Decoration, Formatting, Invisible",
                      "text": "If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If a short description can serve the same purpose and present the same information as the non-text content:",
                          "techniques": [
                            {
                              "id": "TECH:G94",
                              "title": "Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content",
                              "using": [
                                {
                                  "group": {
                                    "title": "Short text alternative techniques for Situation A:",
                                    "techniques": [
                                      {
                                        "id": "TECH:ARIA6",
                                        "title": "Using aria-label to provide labels for objects"
                                      },
                                      {
                                        "id": "TECH:ARIA10",
                                        "title": "Using aria-labelledby to provide a text alternative for non-text content"
                                      },
                                      {
                                        "id": "TECH:G196",
                                        "title": "Using a text alternative on one item within a group of images that describes all items in the group"
                                      },
                                      {
                                        "id": "TECH:FLASH1",
                                        "title": "Setting the name property for a non-text object"
                                      },
                                      {
                                        "id": "TECH:FLASH5",
                                        "title": "Combining adjacent image and text buttons for the same resource"
                                      },
                                      {
                                        "id": "TECH:FLASH28",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash"
                                      },
                                      {
                                        "id": "TECH:H2",
                                        "title": "Combining adjacent image and text links for the same resource"
                                      },
                                      {
                                        "id": "TECH:H35",
                                        "title": "Providing text alternatives on applet elements"
                                      },
                                      {
                                        "id": "TECH:H37",
                                        "title": "Using alt attributes on img elements"
                                      },
                                      {
                                        "id": "TECH:H53",
                                        "title": "Using the body of the object element"
                                      },
                                      {
                                        "id": "TECH:H86",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak"
                                      },
                                      {
                                        "id": "TECH:PDF1",
                                        "title": "Applying text alternatives to images with the Alt entry in PDF documents"
                                      },
                                      {
                                        "id": "TECH:SL5",
                                        "title": "Defining a Focusable Image Class for Silverlight"
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If a short description can not serve the same purpose and present the same information as the non-text content (e.g., a chart or diagram):",
                          "techniques": [
                            {
                              "id": "TECH:G95",
                              "title": "Providing short text alternatives that provide a brief description of the non-text content",
                              "using": [
                                {
                                  "group": {
                                    "title": "Short text alternative techniques for Situation B:",
                                    "techniques": [
                                      {
                                        "id": "TECH:ARIA6",
                                        "title": "Using aria-label to provide labels for objects"
                                      },
                                      {
                                        "id": "TECH:ARIA10",
                                        "title": "Using aria-labelledby to provide a text alternative for non-text content"
                                      },
                                      {
                                        "id": "TECH:G196",
                                        "title": "Using a text alternative on one item within a group of images that describes all items in the group"
                                      },
                                      {
                                        "id": "TECH:FLASH1",
                                        "title": "Setting the name property for a non-text object"
                                      },
                                      {
                                        "id": "TECH:FLASH5",
                                        "title": "Combining adjacent image and text buttons for the same resource"
                                      },
                                      {
                                        "id": "TECH:FLASH28",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash"
                                      },
                                      {
                                        "id": "TECH:H2",
                                        "title": "Combining adjacent image and text links for the same resource"
                                      },
                                      {
                                        "id": "TECH:H35",
                                        "title": "Providing text alternatives on applet elements"
                                      },
                                      {
                                        "id": "TECH:H37",
                                        "title": "Using alt attributes on img elements"
                                      },
                                      {
                                        "id": "TECH:H53",
                                        "title": "Using the body of the object element"
                                      },
                                      {
                                        "id": "TECH:H86",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak"
                                      },
                                      {
                                        "id": "TECH:PDF1",
                                        "title": "Applying text alternatives to images with the Alt entry in PDF documents"
                                      },
                                      {
                                        "id": "TECH:SL5",
                                        "title": "Defining a Focusable Image Class for Silverlight"
                                      }
                                    ]
                                  }
                                },
                                {
                                  "group": {
                                    "title": "Long text alternative techniques for Situation B:",
                                    "techniques": [
                                      {
                                        "id": "TECH:ARIA15",
                                        "title": "Using aria-describedby to provide descriptions of images"
                                      },
                                      {
                                        "id": "TECH:G73",
                                        "title": "Providing a long description in another location with a link to it that is immediately adjacent to the non-text content"
                                      },
                                      {
                                        "id": "TECH:G74",
                                        "title": "Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description"
                                      },
                                      {
                                        "id": "TECH:G92",
                                        "title": "Providing long description for non-text content that serves the same purpose and presents the same information"
                                      },
                                      {
                                        "id": "TECH:FLASH2",
                                        "title": "Setting the description property for a non-text object in Flash"
                                      },
                                      {
                                        "id": "TECH:FLASH11",
                                        "title": "Providing a longer text description of an object"
                                      },
                                      {
                                        "id": "TECH:H45",
                                        "title": "Using longdesc"
                                      },
                                      {
                                        "id": "TECH:H53",
                                        "title": "Using the body of the object element"
                                      },
                                      {
                                        "id": "TECH:SL8",
                                        "title": "Displaying HelpText in Silverlight User Interfaces"
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation C: If non-text content is a control or accepts user input:",
                          "techniques": [
                            {
                              "id": "TECH:G82",
                              "title": "Providing a text alternative that identifies the purpose of the non-text content",
                              "using": [
                                {
                                  "group": {
                                    "title": "Text alternative techniques for controls and input for Situation C:",
                                    "techniques": [
                                      {
                                        "id": "TECH:ARIA6",
                                        "title": "Using aria-label to provide labels for objects"
                                      },
                                      {
                                        "id": "TECH:ARIA9",
                                        "title": "Using aria-labelledby to concatenate a label from several text nodes"
                                      },
                                      {
                                        "id": "TECH:FLASH6",
                                        "title": "Creating accessible hotspots using invisible buttons"
                                      },
                                      {
                                        "id": "TECH:FLASH25",
                                        "title": "Labeling a form control by setting its accessible name"
                                      },
                                      {
                                        "id": "TECH:FLASH27",
                                        "title": "Providing button labels that describe the purpose of a button"
                                      },
                                      {
                                        "id": "TECH:FLASH29",
                                        "title": "Setting the label property for form components"
                                      },
                                      {
                                        "id": "TECH:FLASH30",
                                        "title": "Specifying accessible names for image buttons"
                                      },
                                      {
                                        "id": "TECH:FLASH32",
                                        "title": "Using auto labeling to associate text labels with form controls"
                                      },
                                      {
                                        "id": "TECH:H24",
                                        "title": "Providing text alternatives for the area elements of image maps"
                                      },
                                      {
                                        "id": "TECH:H30",
                                        "title": "Providing link text that describes the purpose of a link for anchor elements"
                                      },
                                      {
                                        "id": "TECH:H36",
                                        "title": "Using alt attributes on images used as submit buttons"
                                      },
                                      {
                                        "id": "TECH:H44",
                                        "title": "Using label elements to associate text labels with form controls"
                                      },
                                      {
                                        "id": "TECH:H65",
                                        "title": "Using the title attribute to identify form controls when the label element cannot be used"
                                      },
                                      {
                                        "id": "TECH:SL18",
                                        "title": "Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name"
                                      },
                                      {
                                        "id": "TECH:SL26",
                                        "title": "Using LabeledBy to Associate Labels and Targets in Silverlight"
                                      },
                                      {
                                        "id": "TECH:SL30",
                                        "title": "Using Silverlight Control Compositing and AutomationProperties.Name"
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation D: If non-text content is time-based media (including live video-only and live audio-only); a test or exercise that would be invalid if presented in text; or primarily intended to create a specific sensory experience:",
                          "techniques": [
                            {
                              "id": "TECH:text",
                              "title": "Providing a descriptive label",
                              "using": [
                                {
                                  "group": {
                                    "title": "Short text alternative techniques for Situation D:",
                                    "techniques": [
                                      {
                                        "id": "TECH:ARIA6",
                                        "title": "Using aria-label to provide labels for objects"
                                      },
                                      {
                                        "id": "TECH:ARIA10",
                                        "title": "Using aria-labelledby to provide a text alternative for non-text content"
                                      },
                                      {
                                        "id": "TECH:G196",
                                        "title": "Using a text alternative on one item within a group of images that describes all items in the group"
                                      },
                                      {
                                        "id": "TECH:FLASH1",
                                        "title": "Setting the name property for a non-text object"
                                      },
                                      {
                                        "id": "TECH:FLASH5",
                                        "title": "Combining adjacent image and text buttons for the same resource"
                                      },
                                      {
                                        "id": "TECH:FLASH28",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash"
                                      },
                                      {
                                        "id": "TECH:H2",
                                        "title": "Combining adjacent image and text links for the same resource"
                                      },
                                      {
                                        "id": "TECH:H35",
                                        "title": "Providing text alternatives on applet elements"
                                      },
                                      {
                                        "id": "TECH:H37",
                                        "title": "Using alt attributes on img elements"
                                      },
                                      {
                                        "id": "TECH:H53",
                                        "title": "Using the body of the object element"
                                      },
                                      {
                                        "id": "TECH:H86",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak"
                                      },
                                      {
                                        "id": "TECH:PDF1",
                                        "title": "Applying text alternatives to images with the Alt entry in PDF documents"
                                      },
                                      {
                                        "id": "TECH:SL5",
                                        "title": "Defining a Focusable Image Class for Silverlight"
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "id": "TECH:ARIA6",
                              "title": "Using aria-label to provide labels for objects"
                            },
                            {
                              "id": "TECH:ARIA10",
                              "title": "Using aria-labelledby to provide a text alternative for non-text content"
                            },
                            {
                              "id": "TECH:G68",
                              "title": "Providing a short text alternative that describes the purpose of live audio-only and live video-only content",
                              "using": [
                                {
                                  "group": {
                                    "title": "Short text alternative techniques for Situation D:",
                                    "techniques": [
                                      {
                                        "id": "TECH:ARIA6",
                                        "title": "Using aria-label to provide labels for objects"
                                      },
                                      {
                                        "id": "TECH:ARIA10",
                                        "title": "Using aria-labelledby to provide a text alternative for non-text content"
                                      },
                                      {
                                        "id": "TECH:G196",
                                        "title": "Using a text alternative on one item within a group of images that describes all items in the group"
                                      },
                                      {
                                        "id": "TECH:FLASH1",
                                        "title": "Setting the name property for a non-text object"
                                      },
                                      {
                                        "id": "TECH:FLASH5",
                                        "title": "Combining adjacent image and text buttons for the same resource"
                                      },
                                      {
                                        "id": "TECH:FLASH28",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash"
                                      },
                                      {
                                        "id": "TECH:H2",
                                        "title": "Combining adjacent image and text links for the same resource"
                                      },
                                      {
                                        "id": "TECH:H35",
                                        "title": "Providing text alternatives on applet elements"
                                      },
                                      {
                                        "id": "TECH:H37",
                                        "title": "Using alt attributes on img elements"
                                      },
                                      {
                                        "id": "TECH:H53",
                                        "title": "Using the body of the object element"
                                      },
                                      {
                                        "id": "TECH:H86",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak"
                                      },
                                      {
                                        "id": "TECH:PDF1",
                                        "title": "Applying text alternatives to images with the Alt entry in PDF documents"
                                      },
                                      {
                                        "id": "TECH:SL5",
                                        "title": "Defining a Focusable Image Class for Silverlight"
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "id": "TECH:G100",
                              "title": "Providing a short text alternative which is the accepted name or a descriptive name of the non-text content",
                              "using": [
                                {
                                  "group": {
                                    "title": "Short text alternative techniques for Situation D:",
                                    "techniques": [
                                      {
                                        "id": "TECH:ARIA6",
                                        "title": "Using aria-label to provide labels for objects"
                                      },
                                      {
                                        "id": "TECH:ARIA10",
                                        "title": "Using aria-labelledby to provide a text alternative for non-text content"
                                      },
                                      {
                                        "id": "TECH:G196",
                                        "title": "Using a text alternative on one item within a group of images that describes all items in the group"
                                      },
                                      {
                                        "id": "TECH:FLASH1",
                                        "title": "Setting the name property for a non-text object"
                                      },
                                      {
                                        "id": "TECH:FLASH5",
                                        "title": "Combining adjacent image and text buttons for the same resource"
                                      },
                                      {
                                        "id": "TECH:FLASH28",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash"
                                      },
                                      {
                                        "id": "TECH:H2",
                                        "title": "Combining adjacent image and text links for the same resource"
                                      },
                                      {
                                        "id": "TECH:H35",
                                        "title": "Providing text alternatives on applet elements"
                                      },
                                      {
                                        "id": "TECH:H37",
                                        "title": "Using alt attributes on img elements"
                                      },
                                      {
                                        "id": "TECH:H53",
                                        "title": "Using the body of the object element"
                                      },
                                      {
                                        "id": "TECH:H86",
                                        "title": "Providing text alternatives for ASCII art, emoticons, and leetspeak"
                                      },
                                      {
                                        "id": "TECH:PDF1",
                                        "title": "Applying text alternatives to images with the Alt entry in PDF documents"
                                      },
                                      {
                                        "id": "TECH:SL5",
                                        "title": "Defining a Focusable Image Class for Silverlight"
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation E: If non-text content is a CAPTCHA:",
                          "techniques": [
                            {
                              "and": [
                                {
                                  "id": "TECH:G143",
                                  "title": "Providing a text alternative that describes the purpose of the CAPTCHA"
                                },
                                {
                                  "id": "TECH:G144",
                                  "title": "Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation F: If the non-text content should be ignored by assistive technology:",
                          "techniques": [
                            {
                              "id": "TECH:text",
                              "title": "Implementing or marking the non-text content so that it will be ignored by assistive technology",
                              "using": [
                                {
                                  "group": {
                                    "title": "Techniques to indicate that text alternatives are not required for Situation F:",
                                    "techniques": [
                                      {
                                        "id": "TECH:C9",
                                        "title": "Using CSS to include decorative images"
                                      },
                                      {
                                        "id": "TECH:FLASH3",
                                        "title": "Marking objects in Flash so that they can be ignored by AT"
                                      },
                                      {
                                        "id": "TECH:H67",
                                        "title": "Using null alt text and no title attribute on img elements for images that AT should ignore"
                                      },
                                      {
                                        "id": "TECH:PDF4",
                                        "title": "Hiding decorative images with the Artifact tag in PDF documents"
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H46",
                      "title": "Using noembed with embed"
                    },
                    {
                      "id": "TECH:C18",
                      "title": "Using CSS margin and padding rules instead of spacer images for layout design"
                    },
                    {
                      "id": "TECH:SL19",
                      "title": "Providing User Instructions With AutomationProperties.HelpText in Silverlight"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F3",
                      "title": "Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information"
                    },
                    {
                      "id": "TECH:F13",
                      "title": "Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image"
                    },
                    {
                      "id": "TECH:F20",
                      "title": "Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur"
                    },
                    {
                      "id": "TECH:F30",
                      "title": "Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
                    },
                    {
                      "id": "TECH:F38",
                      "title": "Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them"
                    },
                    {
                      "id": "TECH:F39",
                      "title": "Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt=\"spacer\" or alt=\"image\") for images that should be ignored by assistive technology"
                    },
                    {
                      "id": "TECH:F65",
                      "title": "Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type \"image\""
                    },
                    {
                      "id": "TECH:F67",
                      "title": "Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information"
                    },
                    {
                      "id": "TECH:F71",
                      "title": "Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative"
                    },
                    {
                      "id": "TECH:F72",
                      "title": "Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative"
                    }
                  ]
                }
              ]
            }
          ],
          "techniques": []
        },
        {
          "id": "WCAG2:time-based-media",
          "alt_id": ["media-equiv"],
          "num": "1.2",
          "versions": ["2.0", "2.1"],
          "handle": "Time-based Media",
          "title": "Provide alternatives for time-based media.",
          "successcriteria": [
            {
              "id": "WCAG2:audio-only-and-video-only-prerecorded",
              "alt_id": ["media-equiv-av-only-alt"],
              "num": "1.2.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Audio-only and Video-only (Prerecorded)",
              "title": "For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Prerecorded Audio-only",
                      "text": "An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content."
                    },
                    {
                      "handle": "Prerecorded Video-only",
                      "text": "Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If the content is prerecorded audio-only:",
                          "techniques": [
                            {
                              "id": "TECH:G158",
                              "title": "Providing an alternative for time-based media for audio-only content",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G158.html",
                              "tests": {
                                "procedure": "1. View the audio-only content while referring to the alternative \n for time-based media. 2. Check that the dialogue in the transcript matches the \n dialogue and information presented in the audio-only presentation.\n 3. If the audio includes multiple voices, check that the transcript \n identifies who is speaking for all dialogue. 4. Check that at least one\n of the following is true: 1. The transcript itself can be programmatically \n determined from the text alternative for the audio-only content \n2. The transcript is referred to from the programmatically determined \ntext alternative for the audio-only content 5. If the alternate version(s) \n are on a separate page, check for the availability of link(s) to allow \n the user to get to the other versions.",
                                "expected-results": "all of the above checks are true."
                              }
                            },
                            {
                              "id": "TECH:SL17",
                              "title": "Providing Static Alternative Content for Silverlight Media Playing in a MediaElement",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17.html",
                              "tests": {
                                "procedure": "1. Using a browser that supports Silverlight, open an HTML page that\n references a Silverlight application through an object tag.\n That application has audio-only media content and is expected to supply a text\n alternative, or has media that is expected to be replaced entirely with \na transcript or similar text alternative. 2. Check for a control that indicates\n that activating it will supply static alternative content for the media.\n Activate the control. 3. Verify that the media control is replaced with alternate\n content, and that assistive technologies represent the change to the user interface.",
                                "expected-results": "#3 is true."
                              }
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If the content is prerecorded video-only:",
                          "techniques": [
                            {
                              "id": "TECH:G159",
                              "title": "Providing an alternative for time-based media for video-only content",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G159.html",
                              "tests": {
                                "procedure": "1. View the video-only content while referring to the alternative \nfor time-based media. 2. Check that the information in the transcript\n includes the same information that is in the video-only presentation.\n 3. If the video includes multiple people or characters, check that the \ntranscript identifies which person or character is associated with each action described.\n 4. Check that at least one of the following is true: 1. The transcript\n itself can be programmatically determined from the text alternative for the \nvideo-only content 2. The transcript is referred to from the programmatically determined \ntext alternative for the video-only content 5. If the alternate version(s) are on a \nseparate page, check for the availability of link(s) to allow the user to get to \nthe other versions.",
                                "expected-results": "all of the above checks are true."
                              }
                            },
                            {
                              "id": "TECH:G166",
                              "title": "Providing audio that describes the important video content and describing it as such",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G166.html",
                              "tests": {
                                "procedure": "For a Web page that contains video-only content: 1. Check that there\n is link to an audio alternative which describes the contents of the\n video immediately before or after the video-only content.",
                                "expected-results": "Check #1 is true."
                              }
                            },
                            {
                              "id": "TECH:SL17",
                              "title": "Providing Static Alternative Content for Silverlight Media Playing in a MediaElement",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17.html",
                              "tests": {
                                "procedure": "1. Using a browser that supports Silverlight, open an HTML page that references a Silverlight application through an object tag. That application has audio-only media content and is expected to supply a text alternative, or has media that is expected to be replaced entirely with a transcript or similar text alternative. 2. Check for a control that indicates that activating it will supply static alternative content for the media. Activate the control. 3. Verify that the media control is replaced with alternate content, and that assistive technologies represent the change to the user interface.",
                                "expected-results": "#3 is true."
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H96",
                      "title": "Using the track element to provide audio descriptions",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/html/H96.html",
                      "tests": {
                        "procedure": "For each video element used to play a video: 1. Check that the video contains \na track element of kind descriptions in the language of the video",
                        "expected-results": "Check #1 is true."
                      }
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F30",
                      "title": "Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html",
                      "tests": {
                        "procedure": "1. Check each text alternative to see if it is not actually a text alternative \nfor the non-text content.",
                        "expected-results": "If step #1 is true then this failure condition applies and content fails the Success Criterion."
                      }
                    },
                    {
                      "id": "TECH:F67",
                      "title": "Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F67.html",
                      "tests": {
                        "procedure": "For all non-text content that requires a long description 1. Check that the long \ndescription serves the same purpose or presents the same information as the \nnon-text content.",
                        "expected-results": "If step #1 is false, then this failure condition applies and the content fails this Success Criterion."
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:captions-prerecorded",
              "alt_id": ["media-equiv-captions"],
              "num": "1.2.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Captions (Prerecorded)",
              "title": "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G93",
                      "title": "Providing open (always visible) captions",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G93.html",
                      "tests": {
                        "procedure": "1. Watch the synchronized media with closed captioning turned off.\n 2. Check that captions (of all dialogue and important sounds) are visible.",
                        "expected-results": "#2 is true."
                      }
                    },
                    {
                      "id": "TECH:G87",
                      "title": "Providing closed captions",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G87.html",
                      "tests": {
                        "procedure": "1. Turn on the closed caption feature of the media player 2. View\n the synchronized media content 3. Check that captions (of all dialogue and \nimportant sounds) are visible",
                        "expected-results": "#3 is true."
                      }
                    },
                    {
                      "id": "TECH:G87",
                      "title": "Providing closed captions",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G87.html",
                      "tests": {
                        "procedure": "1. Turn on the closed caption feature of the media player 2. View\n the synchronized media content 3. Check that captions (of all dialogue and \nimportant sounds) are visible",
                        "expected-results": "#3 is true."
                      },
                      "using": [
                        {
                          "id": "TECH:SM11",
                          "title": "Providing captions through synchronized text streams in SMIL 1.0",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11.html",
                          "tests": {
                            "procedure": "1. Enabled caption preference in player, if present 2. Play file with \ncaptions 3. Check whether captions are displayed",
                            "expected-results": "#3 is true"
                          }
                        },
                        {
                          "id": "TECH:SM12",
                          "title": "Providing captions through synchronized text streams in SMIL 2.0",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/smil/SM12.html",
                          "tests": {
                            "procedure": "1. Enabled caption preference in player, if present 2. Play file with \ncaptions 3. Check whether captions are displayed",
                            "expected-results": "#3 is true"
                          }
                        },
                        {
                          "id": "TECH:H95",
                          "title": "Using the track element to provide captions",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/html/H95.html",
                          "tests": {
                            "procedure": "For each video element used to play a video: 1. Check that the video contains\n a track element of kind captions in the language of the video.",
                            "expected-results": "Check #1 is true."
                          }
                        },
                        {
                          "id": "TECH:FLASH9",
                          "title": "Applying captions to prerecorded synchronized media",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH9.html",
                          "tests": {
                            "procedure": "Watch all video content displayed by your Flash movie. Ensure that: 1. \nCaptions are available for all audio content, either turned on by default \nor as a user preference. 2. The captions properly describe all audio information \ncontained in the video.",
                            "expected-results": "#1 and #2 are true"
                          }
                        },
                        {
                          "id": "TECH:SL16",
                          "title": "Providing Script-Embedded Text Captions for MediaElement Content",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL16.html",
                          "tests": {
                            "procedure": "1. Using a browser that supports Silverlight, open an HTML page that \nreferences a Silverlight application through an object tag. The application \nplays media that is expected to have text captioning. 2. Check that a text area in \nthe user interface shows captions for the media.",
                            "expected-results": "#2 is true."
                          }
                        },
                        {
                          "id": "TECH:SL28",
                          "title": "Using Separate Text-Format Text Captions for MediaElement Content",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL28.html",
                          "tests": {
                            "procedure": "1. Using a browser that supports Silverlight, open an HTML page that \nreferences a Silverlight application through an object tag. That application \nplays media that is expected to have text captioning. 2. Check that the text area in\n the textbox shows captions for the media, and that the captions synchronize with \nmedia in an expected way.",
                            "expected-results": "#2 is true."
                          }
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F8",
                      "title": "Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F8.html",
                      "tests": {
                        "procedure": "1. View the material with captioning turned on. 2. Check that all dialogue \nis accompanied by a caption. 3. Check that all important sounds are captioned.",
                        "expected-results": "If check #2 and check #3 are false, then this failure condition applies and the content fails the Success Criterion."
                      }
                    },
                    {
                      "id": "TECH:F75",
                      "title": "Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F75.html",
                      "tests": {
                        "procedure": "1. Check for captions on synchronized media alternatives. 2. Check that the \nsynchronized media alternative does not provide more information than is presented \non the page in text. NOTE: Synchronized media alternatives often use different \nwords to present what is on the page but it should not present new information \non the topic of the page.",
                        "expected-results": "If check #2 is false, then this failure condition applies and the content fails these Success Criteria."
                      }
                    },
                    {
                      "id": "TECH:F74",
                      "title": "Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F74.html",
                      "tests": {
                        "procedure": "1. Check pages that provide synchronized media alternatives to text. 2. Check \nthat synchronized media is clearly labeled with the text for which it is an alternative.",
                        "expected-results": "If check #2 is false, then this failure condition applies and the content fails these Success Criteria."
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:audio-description-or-media-alternative-prerecorded",
              "alt_id": ["media-equiv-audio-desc"],
              "num": "1.2.3",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded",
              "handle": "Audio Description or Media Alternative (Prerecorded)",
              "title": "An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G69",
                      "title": "Providing an alternative for time based media",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G69.html",
                      "tests": {
                        "procedure": "1. View the synchronized media presentation while referring to the alternative \nfor time-based media. 2. Check that the dialogue in the alternative for \ntime-based media matches the dialogue in the synchronized media presentation. \n3. Check that the alternative for time-based media has descriptions of sounds. \n4. Check that the alternative for time-based media has descriptions of setting and \nsetting changes. 5. Check that the alternative for time-based media has \ndescriptions of actions and expressions of any 'actors' (people, animals etc). \n6. If the alternate version(s) are on a separate page, check for the availability \nof link(s) to allow the user to get to the other versions.",
                        "expected-results": "#2, 3, 4, 5 are true."
                      },
                      "using": [
                        {
                          "id": "TECH:G58",
                          "title": "Placing a link to the alternative for time-based media immediately next to the non-text content",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G58.html",
                          "tests": {
                            "procedure": "1. Check for the presence of a link immediately before or after the non-text\n content. 2. Check that it is a valid link that points directly to the \ncollated document of this particular synchronized media. 3. Check for the \navailability of a link or back function to get the user back to the original location \nof the synchronized media content.",
                            "expected-results": "Items #1 through 3 are all true."
                          }
                        },
                        {
                          "id": "TECH:SL17",
                          "title": "Providing Static Alternative Content for Silverlight Media Playing in a MediaElement",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17.html",
                          "tests": {
                            "procedure": "1. Using a browser that supports Silverlight, open an HTML page that references\n a Silverlight application through an object tag. That application \nhas audio-only media content and is expected to supply a text alternative, or \nhas media that is expected to be replaced entirely with a transcript or similar \ntext alternative. 2. Check for a control that indicates that activating it will \nsupply static alternative content for the media. Activate the control. \n3. Verify that the media control is replaced with alternate content, and that assistive \ntechnologies represent the change to the user interface.",
                            "expected-results": "#3 is true."
                          }
                        }
                      ]
                    },
                    {
                      "id": "TECH:text",
                      "title": "Linking to the alternative for time-based media using one of the following techniques",
                      "using": [
                        {
                          "id": "TECH:H53",
                          "title": "Using the body of the object element",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html",
                          "tests": {
                            "procedure": "1. Check that the body of each object element contains a text alternative for the object.",
                            "expected-results": "#1 is true."
                          }
                        }
                      ]
                    },
                    {
                      "id": "TECH:G78",
                      "title": "Providing a second, user-selectable, audio track that includes audio descriptions",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G78.html",
                      "tests": {
                        "procedure": "1. Check that the ability exists to turn on the audio track that \nincludes audio descriptions. For example, by using a control within the content \nitself or by selecting a control or preference in the media player or operating system.\n 2. Listen to the synchronized media 3. Check to see if gaps in dialogue are used \nto convey important information regarding visual content",
                        "expected-results": "Checks #1 and #3 are true."
                      }
                    },
                    {
                      "and": [
                        {
                          "id": "TECH:G78",
                          "title": "Providing a second, user-selectable, audio track that includes audio descriptions",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G78.html",
                          "tests": {
                            "procedure": "1. Check that the ability exists to turn on the audio track that \nincludes audio descriptions. For example, by using a control within the content \nitself or by selecting a control or preference in the media player or operating system.\n 2. Listen to the synchronized media 3. Check to see if gaps in dialogue are used \nto convey important information regarding visual content",
                            "expected-results": "Checks #1 and #3 are true."
                          }
                        },
                        {
                          "id": "TECH:SL1",
                          "title": "Accessing Alternate Audio Tracks in Silverlight Media",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL1.html",
                          "tests": {
                            "procedure": "1. Open the HTML page for a Silverlight application, where that \napplication plays media and the media is expected to support an alternate audio track \nfor the video. 2. Verify that the application user interface presents a control \nthat enables the user to cause the media to play with an alternate audio track. \n3. Activate that control. Verify that the audio portion of the media player output as \nplayed through the computer's audio system is now playing the alternate audio track.",
                            "expected-results": "#2 and #3 are true."
                          }
                        }
                      ]
                    },
                    {
                      "id": "TECH:G173",
                      "title": "Providing a version of a movie with audio descriptions",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G173.html",
                      "tests": {
                        "procedure": "1. Open the version of the media that includes audio description. 2. \nListen to the movie. 3. Check to see if gaps in dialogue are used to convey important \ninformation regarding visual content. 4. If the alternate version(s) are on a \nseparate page, check for the availability of link(s) to allow the user to get \nto the other versions.",
                        "expected-results": "#3 and #4 are true."
                      },
                      "using": [
                        {
                          "id": "TECH:SM6",
                          "title": "Providing audio description in SMIL 1.0",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/smil/SM6.html",
                          "tests": {
                            "procedure": "1. Find method for turning on audio description from content/player \n(unless it is always played by default) 2. Play file with audio description \n3. Check whether audio description is played",
                            "expected-results": "#3 is true"
                          }
                        },
                        {
                          "id": "TECH:SM7",
                          "title": "Providing audio description in SMIL 2.0",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7.html",
                          "tests": {
                            "procedure": "1. Find method for turning on audio description from content/player \n(unless it is always played by default) 2. Play file with audio description \n3. Check whether audio description is played",
                            "expected-results": "#3 is true"
                          }
                        },
                        {
                          "id": "TECH:FLASH26",
                          "title": "Applying audio descriptions to Flash video",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH26.html",
                          "tests": {
                            "procedure": "When Flash content contains video with an audio soundtrack, confirm that: \n1. Audio descriptions have been made available using separate sound files. \n2, A button is provided that allows users to enable or disable the audio descriptions",
                            "expected-results": "#1 and #2 are true"
                          }
                        },
                        {
                          "id": "TECH:SL1",
                          "title": "Accessing Alternate Audio Tracks in Silverlight Media",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL1.html",
                          "tests": {
                            "procedure": "1. Open the HTML page for a Silverlight application, where that \napplication plays media and the media is expected to support an alternate audio track \nfor the video. 2. Verify that the application user interface presents a control \nthat enables the user to cause the media to play with an alternate audio track. \n3. Activate that control. Verify that the audio portion of the media player \noutput as played through the computer's audio system is now playing the alternate audio track.",
                            "expected-results": "#2 and #3 are true."
                          }
                        },
                        {
                          "id": "TECH:text",
                          "title": "Using any player that supports audio and video"
                        }
                      ]
                    },
                    {
                      "id": "TECH:G8",
                      "title": "Providing a movie with extended audio descriptions",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G8.html",
                      "tests": {
                        "procedure": "1. Open the version of the movie that includes extended audio descriptions. \n2. Check that the video halts for extended audio description when there is not \nenough space to include necessary narration between the natural dialogue. 3. \nCheck that the necessary information is in the audio description. 4. If the alternate \nversion(s) are on a separate page, check for the availability of link(s) \nto allow the user to get to the other versions.",
                        "expected-results": "Checks #2, #3 and #4 are true."
                      },
                      "using": [
                        {
                          "id": "TECH:SM1",
                          "title": "Adding extended audio description in SMIL 1.0",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/smil/SM1.html",
                          "tests": {
                            "procedure": "1. Play file with extended audio descriptions 2. Play file with audio \ndescription 3. Check whether video freezes in places and plays extended audio \ndescription",
                            "expected-results": "#3 is true"
                          }
                        },
                        {
                          "id": "TECH:SM2",
                          "title": "Adding extended audio description in SMIL 2.0",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2.html",
                          "tests": {
                            "procedure": "1. Play file with extended audio description 2. Check whether video \nfreezes in places and plays extended audio description",
                            "expected-results": "#2 is true"
                          }
                        },
                        {
                          "id": "TECH:FLASH26",
                          "title": "Applying audio descriptions to Flash video",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH26.html",
                          "tests": {
                            "procedure": "When Flash content contains video with an audio soundtrack, confirm that: \n1. Audio descriptions have been made available using separate sound files. \n2. A button is provided that allows users to enable or disable the audio descriptions",
                            "expected-results": "#1 and #2 are true"
                          }
                        },
                        {
                          "id": "TECH:SL1",
                          "title": "Accessing Alternate Audio Tracks in Silverlight Media",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL1.html",
                          "tests": {
                            "procedure": "1. Open the HTML page for a Silverlight application, where that application \nplays media and the media is expected to support an alternate audio track \nfor the video. 2. Verify that the application user interface presents a control \nthat enables the user to cause the media to play with an alternate audio track. \n3. Activate that control. Verify that the audio portion of the media player \noutput as played through the computer's audio system is now playing the alternate audio track.",
                            "expected-results": "#2 and #3 are true."
                          }
                        },
                        {
                          "id": "TECH:text",
                          "title": "Using any player that supports audio and video"
                        }
                      ]
                    },
                    {
                      "id": "TECH:G203",
                      "title": "Using a static text alternative to describe a talking head video",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G203.html",
                      "tests": {
                        "procedure": "1. Check that there is no important time-based information in the video track \n2. Check that the programmatically associated description of the media contains any \ncontext of the content that is not contained in the audio track (e.g. speaker \nidentification, credits, context)",
                        "expected-results": "All checks are true."
                      }
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H96",
                      "title": "Using the track element to provide audio descriptions",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/html/H96.html",
                      "tests": {
                        "procedure": "For each video element used to play a video: 1. Check that the video contains \na track element of kind descriptions in the language of the video.",
                        "expected-results": "Check #1 is true."
                      }
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:captions-live",
              "alt_id": ["media-equiv-real-time-captions"],
              "num": "1.2.4",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Captions (Live)",
              "title": "Captions are provided for all live audio content in synchronized media.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "and": [
                        {
                          "id": "TECH:G9",
                          "title": "Creating captions for live synchronized media"
                        },
                        {
                          "id": "TECH:G93",
                          "title": "Providing open (always visible) captions"
                        }
                      ]
                    },
                    {
                      "and": [
                        {
                          "id": "TECH:G9",
                          "title": "Creating captions for live synchronized media"
                        },
                        {
                          "id": "TECH:G87",
                          "title": "Providing closed captions"
                        }
                      ]
                    },
                    {
                      "and": [
                        {
                          "id": "TECH:G9",
                          "title": "Creating captions for live synchronized media",
                          "using": [
                            {
                              "id": "TECH:SM11",
                              "title": "Providing captions through synchronized text streams in SMIL 1.0"
                            },
                            {
                              "id": "TECH:SM12",
                              "title": "Providing captions through synchronized text streams in SMIL 2.0"
                            }
                          ]
                        },
                        {
                          "id": "TECH:G87",
                          "title": "Providing closed captions",
                          "using": [
                            {
                              "id": "TECH:SM11",
                              "title": "Providing captions through synchronized text streams in SMIL 1.0"
                            },
                            {
                              "id": "TECH:SM12",
                              "title": "Providing captions through synchronized text streams in SMIL 2.0"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:audio-description-prerecorded",
              "alt_id": ["media-equiv-audio-desc-only"],
              "num": "1.2.5",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Audio Description (Prerecorded)",
              "title": "Audio description is provided for all prerecorded video content in synchronized media.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G78",
                      "title": "Providing a second, user-selectable, audio track that includes audio descriptions"
                    },
                    {
                      "and": [
                        {
                          "id": "TECH:G78",
                          "title": "Providing a second, user-selectable, audio track that includes audio descriptions"
                        },
                        {
                          "id": "TECH:SL1",
                          "title": "Accessing Alternate Audio Tracks in Silverlight Media"
                        }
                      ]
                    },
                    {
                      "id": "TECH:G173",
                      "title": "Providing a version of a movie with audio descriptions",
                      "using": [
                        {
                          "id": "TECH:SM6",
                          "title": "Providing audio description in SMIL 1.0"
                        },
                        {
                          "id": "TECH:SM7",
                          "title": "Providing audio description in SMIL 2.0"
                        },
                        {
                          "id": "TECH:FLASH26",
                          "title": "Applying audio descriptions to Flash video"
                        },
                        {
                          "id": "TECH:text",
                          "title": "Using any player that supports audio and video"
                        }
                      ]
                    },
                    {
                      "id": "TECH:G8",
                      "title": "Providing a movie with extended audio descriptions",
                      "using": [
                        {
                          "id": "TECH:SM1",
                          "title": "Adding extended audio description in SMIL 1.0"
                        },
                        {
                          "id": "TECH:SM2",
                          "title": "Adding extended audio description in SMIL 2.0"
                        },
                        {
                          "id": "TECH:FLASH26",
                          "title": "Applying audio descriptions to Flash video"
                        },
                        {
                          "id": "TECH:text",
                          "title": "Using any player that supports audio and video"
                        }
                      ]
                    },
                    {
                      "id": "TECH:G203",
                      "title": "Using a static text alternative to describe a talking head video"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H96",
                      "title": "Using the track element to provide audio descriptions"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:sign-language-prerecorded",
              "alt_id": ["media-equiv-sign"],
              "num": "1.2.6",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Sign Language (Prerecorded)",
              "title": "Sign language interpretation is provided for all prerecorded audio content in synchronized media.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G54",
                      "title": "Including a sign language interpreter in the video stream"
                    },
                    {
                      "id": "TECH:G81",
                      "title": "Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player",
                      "using": [
                        {
                          "id": "TECH:SM13",
                          "title": "Providing sign language interpretation through synchronized video streams in SMIL 1.0"
                        },
                        {
                          "id": "TECH:SM14",
                          "title": "Providing sign language interpretation through synchronized video streams in SMIL 2.0"
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:extended-audio-description-prerecorded",
              "alt_id": ["media-equiv-extended-ad"],
              "num": "1.2.7",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Extended Audio Description (Prerecorded)",
              "title": "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G8",
                      "title": "Providing a movie with extended audio descriptions",
                      "using": [
                        {
                          "id": "TECH:SM1",
                          "title": "Adding extended audio description in SMIL 1.0"
                        },
                        {
                          "id": "TECH:SM2",
                          "title": "Adding extended audio description in SMIL 2.0"
                        },
                        {
                          "id": "TECH:text",
                          "title": "Using any player that supports audio and video"
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H96",
                      "title": "Using the track element to provide audio descriptions"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:media-alternative-prerecorded",
              "alt_id": ["media-equiv-text-doc"],
              "num": "1.2.8",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Media Alternative (Prerecorded)",
              "title": "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If the content is prerecorded synchronized media:",
                          "techniques": [
                            {
                              "id": "TECH:G69",
                              "title": "Providing an alternative for time based media",
                              "using": [
                                {
                                  "id": "TECH:G58",
                                  "title": "Placing a link to the alternative for time-based media immediately next to the non-text content"
                                },
                                {
                                  "id": "TECH:SL17",
                                  "title": "Providing Static Alternative Content for Silverlight Media Playing in a MediaElement"
                                }
                              ]
                            },
                            {
                              "id": "TECH:text",
                              "title": "Linking to the alternative for time-based media using one of the following techniques",
                              "using": [
                                {
                                  "id": "TECH:H53",
                                  "title": "Using the body of the object element"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If the content is prerecorded video-only:",
                          "techniques": [
                            {
                              "id": "TECH:G159",
                              "title": "Providing an alternative for time-based media for video-only content"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H46",
                      "title": "Using noembed with embed"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F74",
                      "title": "Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:audio-only-live",
              "alt_id": ["media-equiv-live-audio-only"],
              "num": "1.2.9",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Audio-only (Live)",
              "title": "An alternative for time-based media that presents equivalent information for live audio-only content is provided.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G151",
                      "title": "Providing a link to a text transcript of a prepared statement or script if the script is followed"
                    },
                    {
                      "id": "TECH:G150",
                      "title": "Providing text based alternatives for live audio-only content"
                    },
                    {
                      "id": "TECH:G157",
                      "title": "Incorporating a live audio captioning service into a Web page"
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            }
          ],
          "techniques": []
        },
        {
          "id": "WCAG2:adaptable",
          "alt_id": ["content-structure-separation"],
          "num": "1.3",
          "versions": ["2.0", "2.1"],
          "handle": "Adaptable",
          "title": "Create content that can be presented in different ways (for example simpler layout) without losing information or structure.",
          "successcriteria": [
            {
              "id": "WCAG2:info-and-relationships",
              "alt_id": ["content-structure-separation-programmatic"],
              "num": "1.3.1",
              "dq_id": ["definition-list", "dlitem", "listitem", "list", "th-has-data-cells", "td-headers-attr", "td-has-header", "empty-heading", "aria-required-parent", "aria-required-children", "th-has-data-cells", "label"],
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Info and Relationships",
              "title": "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: The technology provides semantic structure to make information and relationships conveyed through presentation programmatically determinable:",
                          "techniques": [
                            {
                              "id": "TECH:ARIA11",
                              "title": "Using ARIA landmarks to identify regions of a page",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:ARIA12",
                              "title": "Using role=heading to identify headings",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:ARIA13",
                              "title": "Using aria-labelledby to name regions and landmarks",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:ARIA16",
                              "title": "Using aria-labelledby to provide a name for user interface controls",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:ARIA17",
                              "title": "Using grouping roles to identify related form controls",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:ARIA20",
                              "title": "Using the region role to identify a region of the page",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "and": [
                                {
                                  "id": "TECH:G115",
                                  "title": "Using semantic elements to mark up structure",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H49",
                                  "title": "Using semantic markup to mark emphasized or special text",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                }
                              ]
                            },
                            {
                              "id": "TECH:G117",
                              "title": "Using text to convey information that is conveyed by variations in presentation of text",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:G140",
                              "title": "Separating information and structure from presentation to enable different presentations",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:ARIA24",
                              "title": "Semantically identifying a font icon with role=\"img\"",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:text",
                              "title": "Making information and relationships conveyed through presentation programmatically determinable using the following techniques:",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              },
                              "using": [
                                {
                                  "id": "TECH:G138",
                                  "title": "Using semantic markup whenever color cues are used",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H51",
                                  "title": "Using table markup to present tabular information",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:PDF6",
                                  "title": "Using table elements for table markup in PDF Documents",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:PDF20",
                                  "title": "Using Adobe Acrobat Pro's Table Editor to repair mistagged tables",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H39",
                                  "title": "Using caption elements to associate data table captions with data tables",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:FLASH31",
                                  "title": "Specifying caption text for a DataGrid",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H73",
                                  "title": "Using the summary attribute of the table element to give an overview of data tables",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:FLASH23",
                                  "title": "Adding summary information to a DataGrid",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H63",
                                  "title": "Using the scope attribute to associate header cells and data cells in data tables",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H43",
                                  "title": "Using id and headers attributes to associate data cells with header cells in data tables",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:FLASH21",
                                  "title": "Using the DataGrid component to associate column headers with cells",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H44",
                                  "title": "Using label elements to associate text labels with form controls",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H65",
                                  "title": "Using the title attribute to identify form controls when the label element cannot be used",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:PDF10",
                                  "title": "Providing labels for interactive form controls in PDF documents",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:PDF12",
                                  "title": "Providing name, role, value information for form fields in PDF documents",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:FLASH32",
                                  "title": "Using auto labeling to associate text labels with form controls",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:FLASH29",
                                  "title": "Setting the label property for form components",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:FLASH25",
                                  "title": "Labeling a form control by setting its accessible name",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H71",
                                  "title": "Providing a description for groups of form controls using fieldset and legend elements",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:SL20",
                                  "title": "Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:SL26",
                                  "title": "Using LabeledBy to Associate Labels and Targets in Silverlight",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H85",
                                  "title": "Using OPTGROUP to group OPTION elements inside a SELECT",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H48",
                                  "title": "Using ol, ul and dl for lists or groups of links",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H42",
                                  "title": "Using h1-h6 to identify headings",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:PDF9",
                                  "title": "Providing headings by marking content with heading tags in PDF documents",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:SCR21",
                                  "title": "Using functions of the Document Object Model (DOM) to add content to a page",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:PDF11",
                                  "title": "Providing links and link text using the Link annotation and the /Link structure element in PDF documents",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:PDF17",
                                  "title": "Specifying consistent page numbering for PDF documents",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:PDF21",
                                  "title": "Using List tags for lists in PDF documents",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:H97",
                                  "title": "Grouping related links using the nav element",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation B: The technology in use does NOT provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable:",
                          "techniques": [
                            {
                              "id": "TECH:G117",
                              "title": "Using text to convey information that is conveyed by variations in presentation of text",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:FLASH8",
                              "title": "Adding a group name to the accessible name of a form control",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              }
                            },
                            {
                              "id": "TECH:text",
                              "title": "Making information and relationships conveyed through presentation programmatically determinable or available in text using the following techniques:",
                              "url": "",
                              "tests": {
                                "procedure": "",
                                "expected-results": ""
                              },
                              "using": [
                                {
                                  "id": "TECH:T1",
                                  "title": "Using standard text formatting conventions for paragraphs",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:T2",
                                  "title": "Using standard text formatting conventions for lists",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                },
                                {
                                  "id": "TECH:T3",
                                  "title": "Using standard text formatting conventions for headings",
                                  "url": "",
                                  "tests": {
                                    "procedure": "",
                                    "expected-results": ""
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:C22",
                      "title": "Using CSS to control visual presentation of text",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:G162",
                      "title": "Positioning labels to maximize predictability of relationships",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:ARIA1",
                      "title": "Using the aria-describedby property to provide a descriptive label for user interface controls",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:ARIA2",
                      "title": "Identifying a required field with the aria-required property",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:G141",
                      "title": "Organizing a page using headings",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F2",
                      "title": "Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F33",
                      "title": "Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F34",
                      "title": "Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F42",
                      "title": "Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F43",
                      "title": "Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F46",
                      "title": "Failure of Success Criterion 1.3.1 due to using th elements, layout tables",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F48",
                      "title": "Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F87",
                      "title": "Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F90",
                      "title": "Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F91",
                      "title": "Failure of Success Criterion 1.3.1 for not correctly marking up table headers",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    },
                    {
                      "id": "TECH:F92",
                      "title": "Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information",
                      "url": "",
                      "tests": {
                        "procedure": "",
                        "expected-results": ""
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:meaningful-sequence",
              "alt_id": ["content-structure-separation-sequence"],
              "num": "1.3.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Meaningful Sequence",
              "title": "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G57",
                      "title": "Ordering the content in a meaningful sequence",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html",
                      "tests": {
                        "procedure": "1. Linearize content using a standard approach for the technology \n(e.g., removing layout styles or running a linearization tool 2. Check to see if \nthe order of content yields the same meaning as the original",
                        "expected-results": "Check #2 is true."
                      }
                    },
                    {
                      "and": [
                        {
                          "id": "TECH:text1",
                          "title": "Marking sequences in the content as meaningful"
                        },
                        {
                          "id": "TECH:G57",
                          "title": "Ordering the content in a meaningful sequence",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html",
                          "tests": {
                            "procedure": "1. Linearize content using a standard approach for the technology \n(e.g., removing layout styles or running a linearization tool 2. Check to see if \nthe order of content yields the same meaning as the original",
                            "expected-results": "Check #2 is true."
                          },
                          "using": [
                            {
                              "id": "TECH:H34",
                              "title": "Using a Unicode right-to-left mark (RLM) or left-to-right mark (LRM) to mix text direction inline",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/html/H34.html",
                              "tests": {
                                "procedure": "1. Examine the source for places where text changes direction. \n2. When text changes direction, check whether neutral characters such as spaces or \npunctuation occur adjacent to text that is rendered in the non-default direction. \n3. When #2 is true and the HTML bidirectional algorithm would produce the wrong \nplacement of the neutral characters, check whether the neutral characters are \nfollowed by Unicode right-to-left or left-to-right marks that cause neutral characters \nto be placed as part of the preceding characters.",
                                "expected-results": "Check #3 is true."
                              }
                            },
                            {
                              "id": "TECH:H56",
                              "title": "Using the dir attribute on an inline element to resolve problems with nested directional runs",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/html/H56.html",
                              "tests": {
                                "procedure": "1. Examine the text direction of text in the document 2. If the text \ndirection is right-to-left, check that for the ancestor element that has a dir \nattribute, the attribute has the value 'rtl' 3. If the text direction is left-to-right, \ncheck that there is no ancestor element with a dir attribute, or that for the ancestor \nelement that has a dir attribute, the attribute has the value 'ltr'",
                                "expected-results": "Checks #2 and #3 are true for all text."
                              }
                            },
                            {
                              "id": "TECH:C6",
                              "title": "Positioning content based on structural markup",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/css/C6.html",
                              "tests": {
                                "procedure": "For content which uses CSS for positioning 1. Remove the style information \nfrom the document or turn off use of style sheets in the user agent. \n2. Check that the structural relations and the meaning of the content are preserved.",
                                "expected-results": "Check #2 is true."
                              }
                            },
                            {
                              "id": "TECH:C8",
                              "title": "Using CSS letter-spacing to control spacing within a word",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/css/C8.html",
                              "tests": {
                                "procedure": "For each word that appears to have non-standard spacing between characters: \n1. Check whether the CSS letter-spacing property was used to control spacing.",
                                "expected-results": "Check #1 is true."
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "TECH:C27",
                      "title": "Making the DOM order match the visual order",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/css/C27.html",
                      "tests": {
                        "procedure": "1. Visually examine the order of the content in the Web page \nas it is presented to the end user. \n2. Examine the elements in the DOM using \na tool that allows you to see the DOM. \n3. Ensure that the order of the content in the source code \nsections match the visual presentation of the content in the Web page. \n(e.g., for an English language page the order \nis from top to bottom and from left to right.) ",
                        "expected-results": "Step #3 is true."
                      }
                    },
                    {
                      "id": "TECH:FLASH15",
                      "title": "Using the tabIndex property to specify a logical reading order and a logical tab order in Flash",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH15.html",
                      "tests": {
                        "procedure": "1. Use a screen reader to navigate through \nthe Flash movie, one element at a time. \n2. Check that the order in which the screen reader \nannounces the content, matches the logical visual order. \n3. When focus has been placed inside the Flash movie, \npress the Tab key repeatedly to traverse its contents by keyboard. \n4. Verify that all interactive and focusable elements \nare reachable by keyboard, in a logical order.",
                        "expected-results": "Checks #2 and #4 are true."
                      }
                    },
                    {
                      "id": "TECH:PDF3",
                      "title": "Ensuring correct tab and reading order in PDF documents",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3.html",
                      "tests": {
                        "procedure": "1. Verify that the content is in the correct \nreading order by one of the following: \n- Read the PDF document with a screen reader or a tool that reads aloud, \nlistening to hear that each element is read in the correct order. \n- Use a tool that exposes the document through the accessibility API, \nand verify that the reading order is correct. \n2. Verify that the tab order is correct for focusable content \nby one of the following: \n- Use the tab key to traverse the focus order in the document. \n- Use a tool that is capable of showing the page object entry \nthat specifies the tab order setting to open the PDF document \nand view the setting.",
                        "expected-results": "#1 and Check #2 are true."
                      }
                    },
                    {
                      "id": "TECH:SL34",
                      "title": "Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL34.html",
                      "tests": {
                        "procedure": "1. Using a browser that supports Silverlight, \nopen an HTML page that references a Silverlight application \nthrough an object tag. \n2. Engage the screen reader. \nPress the TAB key to traverse the sequence of elements \ninside the Silverlight content area. \n3. Verify that the order in which elements are traversed \nin a tab sequence is also the expected order of the elements \nas they are presented visually, particularly in such cases \nwhere the order of each element is significant per SC 1.3.2.",
                        "expected-results": "#3 is true."
                      }
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F34",
                      "title": "Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F34.html",
                      "tests": {
                        "procedure": "1. Examine the document for visually formatted tables. \n2. Check whether the tables are created using \nwhite space characters to layout the tabular data.",
                        "expected-results": "If step #2 is true, then this failure condition applies and the content fails these Success Criteria."
                      }
                    },
                    {
                      "id": "TECH:F33",
                      "title": "Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F33.html",
                      "tests": {
                        "procedure": "1. Examine the document for data or information presented in columnar format. \n2. Check whether the columns are created using white space \ncharacters to lay out the information.",
                        "expected-results": "If step #2 is true, then this failure condition applies and the content fails these Success Criteria."
                      }
                    },
                    {
                      "id": "TECH:F32",
                      "title": "Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F32.html",
                      "tests": {
                        "procedure": "For each word that appears to have \nnon-standard spacing between characters: \n1. Check whether any words in the text of the content contain \nwhite space characters.",
                        "expected-results": "If step #1 is true, then this failure condition applies and the content fails this Success Criterion."
                      }
                    },
                    {
                      "id": "TECH:F49",
                      "title": "Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F49.html",
                      "tests": {
                        "procedure": "1. Linearize the content in either of the following ways: \n- Present the content in source code order \n- Remove the table markup from around the content \n2. Check that the linear reading order matches \nany meaningful sequence conveyed through presentation.",
                        "expected-results": "If check #2 is false, then this failure condition applies and the content fails this Success Criterion."
                      }
                    },
                    {
                      "id": "TECH:F1",
                      "title": "Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F1.html",
                      "tests": {
                        "procedure": "For content which uses CSS for positioning: \n1. Remove the style information from the document \nor turn off use of style sheets in the user agent. \n2. Check that the reading order of the content is correct \nand the meaning of the content is preserved.",
                        "expected-results": "If step #2 is false, then this failure condition applies and the content fails this Success Criterion."
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:sensory-characteristics",
              "alt_id": ["content-structure-separation-understanding"],
              "num": "1.3.3",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Sensory Characteristics",
              "title": "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "For requirements related to color, refer to Guideline 1.4."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G96",
                      "title": "Providing textual identification of items that otherwise rely only on sensory information to be understood",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G96.html",
                      "tests": {
                        "procedure": "Find all references in the Web page that mention the \nshape, size, or position of an object. \nFor each such item: \n1. Check that the reference contains additional \ninformation that allows the item to be located and identified \nwithout any knowledge of its shape, size, or relative position.",
                        "expected-results": "Check #1 is true"
                      }
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F14",
                      "title": "Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F14.html",
                      "tests": {
                        "procedure": "1. Examine the Web page for textual references \nto content within the Web page. \n2. Check that the references do not rely on \nonly the visual shape or location of the content.",
                        "expected-results": "If step #2 is false, then this failure condition applies and the content fails this Success Criterion."
                      }
                    },
                    {
                      "id": "TECH:F26",
                      "title": "Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F26.html",
                      "tests": {
                        "procedure": "For each instruction that refers to non-text marks \nthat convey information: \n1. Check whether there are other means to determine \nthe information conveyed by the non-text marks.",
                        "expected-results": "If #1 is false, then this failure condition applies and the content fails this Success Criterion."
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:orientation",
              "alt_id": [],
              "num": "1.3.4",
              "versions": ["2.1"],
              "level": "AA",
              "handle": "Orientation",
              "title": "Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "Using CSS to set the orientation to allow both landscape and portrait."
                    },
                    {
                      "id": "TECH:text",
                      "title": "Use of show/hide controls to allow access to content in different orientations."
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F97",
                      "title": "Failure due to locking the orientation to landscape or portrait view"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:identify-input-purpose",
              "alt_id": [],
              "num": "1.3.5",
              "versions": ["2.1"],
              "level": "AA",
              "handle": "Identify Input Purpose",
              "title": "The purpose of each input field collecting information about the user can be programmatically determined when:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "text": "The input field serves a purpose identified in the Input Purposes for User Interface Components section; and"
                    },
                    {
                      "text": "The content is implemented using technologies with support for identifying the expected meaning for form input data."
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:identify-purpose",
              "alt_id": [],
              "num": "1.3.6",
              "versions": ["2.1"],
              "level": "AAA",
              "handle": "Identify Purpose",
              "title": "In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:ARIA11",
                      "title": "Using ARIA landmarks to identify regions of a page"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Using microdata to markup user interface components (future link)"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:text",
                      "title": "Enable user agents to find the version of the content that best fits their needs."
                    },
                    {
                      "id": "TECH:text",
                      "title": "Using semantics to identify important features (coga-simplification=\"simplest\")."
                    },
                    {
                      "id": "TECH:text",
                      "title": "Use of aria-invalid and aria-required."
                    }
                  ]
                },
                { "failure": [] }
              ]
            }
          ],
          "techniques": []
        },
        {
          "id": "WCAG2:distinguishable",
          "alt_id": ["visual-audio-contrast"],
          "num": "1.4",
          "versions": ["2.0", "2.1"],
          "handle": "Distinguishable",
          "title": "Make it easier for users to see and hear content including separating foreground from background.",
          "successcriteria": [
            {
              "id": "WCAG2:use-of-color",
              "alt_id": ["visual-audio-contrast-without-color"],
              "dq_id": ["avoid-inline-spacing", "link-in-text-block"],
              "num": "1.4.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Use of Color",
              "title": "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If the color of particular words, backgrounds, or other content is used to indicate information:",
                          "techniques": [
                            {
                              "id": "TECH:G14",
                              "title": "Ensuring that information conveyed by color differences is also available in text"
                            },
                            {
                              "id": "TECH:G205",
                              "title": "Including a text cue for colored form control labels"
                            },
                            {
                              "id": "TECH:G182",
                              "title": "Ensuring that additional visual cues are available when text color differences are used to convey information"
                            },
                            {
                              "id": "TECH:G183",
                              "title": "Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them"
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If color is used within an image to convey information:",
                          "techniques": [
                            {
                              "id": "TECH:G111",
                              "title": "Using color and pattern"
                            },
                            {
                              "id": "TECH:G14",
                              "title": "Ensuring that information conveyed by color differences is also available in text"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:C15",
                      "title": "Using CSS to change the presentation of a user interface component when it receives focus"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F13",
                      "title": "Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image"
                    },
                    {
                      "id": "TECH:F73",
                      "title": "Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision"
                    },
                    {
                      "id": "TECH:F81",
                      "title": "Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:audio-control",
              "alt_id": ["visual-audio-contrast-dis-audio"],
              "dq_id": ["no-autoplay-audio"],
              "num": "1.4.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/audio-control",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Audio Control",
              "title": "If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G60",
                      "title": "Playing a sound that turns off automatically within three seconds"
                    },
                    {
                      "id": "TECH:G170",
                      "title": "Providing a control near the beginning of the Web page that turns off sounds that play automatically"
                    },
                    {
                      "id": "TECH:G171",
                      "title": "Playing sounds only on user request"
                    },
                    {
                      "id": "TECH:SL24",
                      "title": "Using AutoPlay to Keep Silverlight Media from Playing Automatically"
                    },
                    {
                      "id": "TECH:FLASH18",
                      "title": "Providing a control to turn off sounds that play automatically in Flash"
                    },
                    {
                      "id": "TECH:FLASH34",
                      "title": "Turning off sounds that play automatically when an assistive technology is detected"
                    },
                    {
                      "id": "TECH:SL3",
                      "title": "Controlling Silverlight MediaElement Audio Volume"
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F23",
                      "title": "Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off"
                    },
                    {
                      "id": "TECH:F93",
                      "title": "Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:contrast-minimum",
              "alt_id": ["visual-audio-contrast-contrast"],
              "num": "1.4.3",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Contrast (Minimum)",
              "title": "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Large Text",
                      "text": "Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;"
                    },
                    {
                      "handle": "Incidental",
                      "text": "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement."
                    },
                    {
                      "handle": "Logotypes",
                      "text": "Text that is part of a logo or brand name has no contrast requirement."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: text is less than 18 point if not bold and less than 14 point if bold",
                          "techniques": [
                            {
                              "id": "TECH:G18",
                              "title": "Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text"
                            },
                            {
                              "id": "TECH:G148",
                              "title": "Not specifying background color, not specifying text color, and not using technology features that change those defaults"
                            },
                            {
                              "id": "TECH:G174",
                              "title": "Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast"
                            },
                            {
                              "id": "TECH:SL13",
                              "title": "Providing A Style Switcher To Switch To High Contrast"
                            }
                          ]
                        },
                        {
                          "title": "Situation B: text is at least 18 point if not bold and at least 14 point if bold",
                          "techniques": [
                            {
                              "id": "TECH:G145",
                              "title": "Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text"
                            },
                            {
                              "id": "TECH:G148",
                              "title": "Not specifying background color, not specifying text color, and not using technology features that change those defaults"
                            },
                            {
                              "id": "TECH:G174",
                              "title": "Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast"
                            },
                            {
                              "id": "TECH:SL13",
                              "title": "Providing A Style Switcher To Switch To High Contrast"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G156",
                      "title": "Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F24",
                      "title": "Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa"
                    },
                    {
                      "id": "TECH:F83",
                      "title": "Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:resize-text",
              "alt_id": ["visual-audio-contrast-scale"],
              "num": "1.4.4",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Resize text",
              "title": "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G142",
                      "title": "Using a technology that has commonly-available user agents that support zoom"
                    },
                    {
                      "id": "TECH:SL22",
                      "title": "Supporting Browser Zoom in Silverlight"
                    },
                    {
                      "id": "TECH:SL23",
                      "title": "Using A Style Switcher to Increase Font Size of Silverlight Text Elements"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Ensuring that text containers resize when the text resizes AND using measurements that are relative to other measurements in the content by using one or more of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:C28",
                          "title": "Specifying the size of text containers using em units"
                        },
                        {
                          "id": "TECH:text",
                          "title": "Techniques for relative measurements",
                          "using": [
                            {
                              "id": "TECH:C12",
                              "title": "Using percent for font sizes"
                            },
                            {
                              "id": "TECH:C13",
                              "title": "Using named font sizes"
                            },
                            {
                              "id": "TECH:C14",
                              "title": "Using em units for font sizes"
                            }
                          ]
                        },
                        {
                          "id": "TECH:text",
                          "title": "Techniques for text container resizing",
                          "using": [
                            {
                              "id": "TECH:SCR34",
                              "title": "Calculating size and position in a way that scales with text size"
                            },
                            {
                              "id": "TECH:G146",
                              "title": "Using liquid layout"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "TECH:G178",
                      "title": "Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent"
                    },
                    {
                      "id": "TECH:G179",
                      "title": "Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:C17",
                      "title": "Scaling form elements which contain text"
                    },
                    {
                      "id": "TECH:C20",
                      "title": "Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized"
                    },
                    {
                      "id": "TECH:C22",
                      "title": "Using CSS to control visual presentation of text"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F69",
                      "title": "Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured"
                    },
                    {
                      "id": "TECH:F80",
                      "title": "Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%"
                    },
                    {
                      "id": "TECH:F94",
                      "title": "Failure of Success Criterion 1.4.4 due to text sized in viewport units"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:images-of-text",
              "alt_id": ["visual-audio-contrast-text-presentation"],
              "num": "1.4.5",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Images of Text",
              "title": "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Customizable",
                      "text": "The image of text can be visually customized to the user's requirements;"
                    },
                    {
                      "handle": "Essential",
                      "text": "A particular presentation of text is essential to the information being conveyed."
                    }
                  ]
                },
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "Logotypes (text that is part of a logo or brand name) are considered essential."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:C22",
                      "title": "Using CSS to control visual presentation of text"
                    },
                    {
                      "id": "TECH:SL31",
                      "title": "Using Silverlight Font Properties to Control Text Presentation"
                    },
                    {
                      "id": "TECH:C30",
                      "title": "Using CSS to replace text with images of text and providing user interface controls to switch"
                    },
                    {
                      "id": "TECH:G140",
                      "title": "Separating information and structure from presentation to enable different presentations"
                    },
                    {
                      "id": "TECH:PDF7",
                      "title": "Performing OCR on a scanned PDF document to provide actual text"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:C12",
                      "title": "Using percent for font sizes"
                    },
                    {
                      "id": "TECH:C13",
                      "title": "Using named font sizes"
                    },
                    {
                      "id": "TECH:C14",
                      "title": "Using em units for font sizes"
                    },
                    {
                      "id": "TECH:C8",
                      "title": "Using CSS letter-spacing to control spacing within a word"
                    },
                    {
                      "id": "TECH:C6",
                      "title": "Positioning content based on structural markup"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:contrast-enhanced",
              "alt_id": ["visual-audio-contrast7"],
              "num": "1.4.6",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Contrast (Enhanced)",
              "title": "The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Large Text",
                      "text": "Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;"
                    },
                    {
                      "handle": "Incidental",
                      "text": "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement."
                    },
                    {
                      "handle": "Logotypes",
                      "text": "Text that is part of a logo or brand name has no contrast requirement."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: text is less than 18 point if not bold and less than 14 point if bold",
                          "techniques": [
                            {
                              "id": "TECH:G17",
                              "title": "Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text"
                            },
                            {
                              "id": "TECH:G148",
                              "title": "Not specifying background color, not specifying text color, and not using technology features that change those defaults"
                            },
                            {
                              "id": "TECH:G174",
                              "title": "Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast"
                            },
                            {
                              "id": "TECH:SL13",
                              "title": "Providing A Style Switcher To Switch To High Contrast"
                            }
                          ]
                        },
                        {
                          "title": "Situation B: text is as least 18 point if not bold and at least 14 point if bold",
                          "techniques": [
                            {
                              "id": "TECH:G18",
                              "title": "Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text"
                            },
                            {
                              "id": "TECH:G148",
                              "title": "Not specifying background color, not specifying text color, and not using technology features that change those defaults"
                            },
                            {
                              "id": "TECH:G174",
                              "title": "Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast"
                            },
                            {
                              "id": "TECH:SL13",
                              "title": "Providing A Style Switcher To Switch To High Contrast"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G156",
                      "title": "Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F24",
                      "title": "Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa"
                    },
                    {
                      "id": "TECH:F83",
                      "title": "Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:low-or-no-background-audio",
              "alt_id": ["visual-audio-contrast-noaudio"],
              "num": "1.4.7",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Low or No Background Audio",
              "title": "For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "No Background",
                      "text": "The audio does not contain background sounds."
                    },
                    {
                      "handle": "Turn Off",
                      "text": "The background sounds can be turned off."
                    },
                    {
                      "handle": "20 dB",
                      "text": "The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds. Per the definition of \"decibel,\" background sound that meets this requirement will be approximately four times quieter than the foreground speech content."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G56",
                      "title": "Mixing audio files so that non-speech sounds are at least 20 decibels lower than the speech audio content"
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:visual-presentation",
              "alt_id": ["visual-audio-contrast-visual-presentation"],
              "num": "1.4.8",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Visual Presentation",
              "title": "For the visual presentation of blocks of text, a mechanism is available to achieve the following:",
              "details": [
                {
                  "type": "olist",
                  "items": [
                    {
                      "handle": "",
                      "text": "Foreground and background colors can be selected by the user."
                    },
                    {
                      "handle": "",
                      "text": "Width is no more than 80 characters or glyphs (40 if CJK)."
                    },
                    {
                      "handle": "",
                      "text": "Text is not justified (aligned to both the left and the right margins)."
                    },
                    {
                      "handle": "",
                      "text": "Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing."
                    },
                    {
                      "handle": "",
                      "text": "Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "First Requirement: Techniques to ensure foreground and background colors can be selected by the user",
                          "techniques": [
                            {
                              "id": "TECH:C23",
                              "title": "Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content",
                              "append": "OR"
                            },
                            {
                              "id": "TECH:C25",
                              "title": "Specifying borders and layout in CSS to delineate areas of a Web page while not specifying text and text-background colors",
                              "append": "OR"
                            },
                            {
                              "id": "TECH:G156",
                              "title": "Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text",
                              "append": "OR"
                            },
                            {
                              "id": "TECH:G148",
                              "title": "Not specifying background color, not specifying text color, and not using technology features that change those defaults",
                              "append": "OR"
                            },
                            {
                              "id": "TECH:G175",
                              "title": "Providing a multi color selection tool on the page for foreground and background colors",
                              "append": "OR"
                            }
                          ]
                        },
                        {
                          "title": "Second Requirement: Techniques to ensure width is no more than 80 characters or glyphs (40 if CJK)",
                          "techniques": [
                            {
                              "id": "TECH:G204",
                              "title": "Not interfering with the user agent's reflow of text as the viewing window is narrowed",
                              "append": "OR"
                            },
                            {
                              "id": "TECH:C20",
                              "title": "Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized"
                            }
                          ]
                        },
                        {
                          "title": "Third Requirement: Techniques to ensure text is not justified (aligned to both the left and the right margins)",
                          "techniques": [
                            {
                              "id": "TECH:C19",
                              "title": "Specifying alignment either to the left OR right in CSS",
                              "append": "OR"
                            },
                            {
                              "id": "TECH:G172",
                              "title": "Providing a mechanism to remove full justification of text",
                              "append": "OR"
                            },
                            {
                              "id": "TECH:G169",
                              "title": "Aligning text on only one side"
                            }
                          ]
                        },
                        {
                          "title": "Fourth Requirement: Techniques to ensure line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing",
                          "techniques": [
                            {
                              "id": "TECH:G188",
                              "title": "Providing a button on the page to increase line spaces and paragraph spaces",
                              "append": "OR"
                            },
                            {
                              "id": "TECH:C21",
                              "title": "Specifying line spacing in CSS"
                            }
                          ]
                        },
                        {
                          "title": "Fifth Requirement: Techniques to ensure text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window",
                          "techniques": [
                            {
                              "id": "TECH:text",
                              "title": "Not interfering with the user agent's reflow of text as the viewing window is narrowed",
                              "append": "OR"
                            },
                            {
                              "id": "TECH:G146",
                              "title": "Using liquid layout",
                              "append": "AND using measurements that are relative to other measurements in the content by",
                              "using": [
                                {
                                  "id": "TECH:C12",
                                  "title": "Using percent for font sizes",
                                  "append": "OR"
                                },
                                {
                                  "id": "TECH:C13",
                                  "title": "Using named font sizes",
                                  "append": "OR"
                                },
                                {
                                  "id": "TECH:C14",
                                  "title": "Using em units for font sizes",
                                  "append": "OR"
                                },
                                {
                                  "id": "TECH:C24",
                                  "title": "Using percentage values in CSS for container sizes",
                                  "append": "OR"
                                },
                                {
                                  "id": "TECH:FLASH33",
                                  "title": "Using relative values for Flash object dimensions",
                                  "append": "OR"
                                },
                                {
                                  "id": "TECH:SCR34",
                                  "title": "Calculating size and position in a way that scales with text size"
                                }
                              ]
                            },
                            {
                              "id": "TECH:G206",
                              "title": "Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F24",
                      "title": "Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa"
                    },
                    {
                      "id": "TECH:F88",
                      "title": "Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:images-of-text-no-exception",
              "alt_id": ["visual-audio-contrast-text-images"],
              "num": "1.4.9",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Images of Text (No Exception)",
              "title": "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "Logotypes (text that is part of a logo or brand name) are considered essential."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:C22",
                      "title": "Using CSS to control visual presentation of text"
                    },
                    {
                      "id": "TECH:SL31",
                      "title": "Using Silverlight Font Properties to Control Text Presentation"
                    },
                    {
                      "id": "TECH:C30",
                      "title": "Using CSS to replace text with images of text and providing user interface controls to switch"
                    },
                    {
                      "id": "TECH:G140",
                      "title": "Separating information and structure from presentation to enable different presentations"
                    },
                    {
                      "id": "TECH:PDF7",
                      "title": "Performing OCR on a scanned PDF document to provide actual text"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:C12",
                      "title": "Using percent for font sizes"
                    },
                    {
                      "id": "TECH:C13",
                      "title": "Using named font sizes"
                    },
                    {
                      "id": "TECH:C14",
                      "title": "Using em units for font sizes"
                    },
                    {
                      "id": "TECH:C8",
                      "title": "Using CSS letter-spacing to control spacing within a word"
                    },
                    {
                      "id": "TECH:C6",
                      "title": "Positioning content based on structural markup"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:reflow",
              "alt_id": [],
              "num": "1.4.10",
              "versions": ["2.1"],
              "level": "AA",
              "handle": "Reflow",
              "title": "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "text": "Vertical scrolling content at a width equivalent to 320 CSS pixels;"
                    },
                    {
                      "text": "Horizontal scrolling content at a height equivalent to 256 CSS pixels;"
                    }
                  ]
                },
                {
                  "type": "p",
                  "text": "Except for parts of the content which require two-dimensional layout for usage or meaning."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:C32",
                      "title": "Using media queries and grid CSS to reflow columns"
                    },
                    {
                      "id": "TECH:C31",
                      "title": "Using CSS Flexbox to reflow content"
                    },
                    {
                      "id": "TECH:C33",
                      "title": "Allowing for Reflow with Long URLs and Strings of Text"
                    },
                    {
                      "id": "TECH:C38",
                      "title": "Using CSS width, max-width and flexbox to fit labels and inputs"
                    },
                    {
                      "id": "TECH:SCR34",
                      "title": "Calculating size and position in a way that scales with text size"
                    },
                    {
                      "id": "TECH:G206",
                      "title": "Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text"
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ New: Using PDF/UA when creating PDFs."
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:C34",
                      "title": "Using media queries to un-fixing sticky headers / footers"
                    },
                    {
                      "id": "TECH:C37",
                      "title": "Using CSS max-width and height to fit images"
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ CSS, Reflowing simple data tables."
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ CSS, Fitting data cells within the width of the viewport."
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ Mechanism to allow mobile view at any time"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:text",
                      "title": "@@ Using fixed sized containers and fixed position content (CSS)"
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ (HTML) Using preformatted text or excluding preformatting text as an exception to no two dimensional scrolling."
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:non-text-contrast",
              "alt_id": [],
              "num": "1.4.11",
              "versions": ["2.1"],
              "level": "AA",
              "handle": "Non-text Contrast",
              "title": "The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "User Interface Components",
                      "text": "Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;"
                    },
                    {
                      "handle": "Graphical Objects",
                      "text": "Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "User Interface Component contrast",
                          "techniques": [
                            {
                              "id": "TECH:G195",
                              "title": "Using an author-supplied, highly visible focus indicator"
                            }
                          ]
                        },
                        {
                          "title": "Graphics with sufficient contrast",
                          "techniques": [
                            {
                              "id": "TECH:G207",
                              "title": "Ensuring that a contrast ratio of 3:1 is provided for icons"
                            },
                            {
                              "id": "TECH:G209",
                              "title": "Provide sufficient contrast at the boundaries between adjoining colors"
                            }
                          ]
                        },
                        {
                          "title": "Text in or over graphics",
                          "techniques": [
                            {
                              "id": "TECH:text",
                              "title": "@@ Include labels and values with the graphic (TBD)"
                            },
                            {
                              "id": "TECH:G18",
                              "title": "Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text"
                            },
                            {
                              "id": "TECH:G145",
                              "title": "Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text"
                            },
                            {
                              "id": "TECH:G174",
                              "title": "Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G183",
                      "title": "Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F78",
                      "title": "Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:text-spacing",
              "alt_id": [],
              "num": "1.4.12",
              "versions": ["2.1"],
              "level": "AA",
              "handle": "Text Spacing",
              "title": "In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "text": "Line height (line spacing) to at least 1.5 times the font size;"
                    },
                    {
                      "text": "Spacing following paragraphs to at least 2 times the font size;"
                    },
                    {
                      "text": "Letter spacing (tracking) to at least 0.12 times the font size;"
                    },
                    {
                      "text": "Word spacing to at least 0.16 times the font size."
                    }
                  ]
                },
                {
                  "type": "p",
                  "text": "Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:C36",
                      "title": "Allowing for text spacing override"
                    },
                    {
                      "id": "TECH:C35",
                      "title": "Allowing for text spacing without wrapping"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:C8",
                      "title": "Using CSS letter-spacing to control spacing within a word"
                    },
                    {
                      "id": "TECH:C21",
                      "title": "Specifying line spacing in CSS"
                    },
                    {
                      "id": "TECH:C28",
                      "title": "Specifying the size of text containers using em units"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:text",
                      "title": "Failure of Success Criterion 1.4.12 due to not allowing for spacing override. (Future technique)"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:content-on-hover-or-focus",
              "alt_id": [],
              "num": "1.4.13",
              "versions": ["2.1"],
              "level": "AA",
              "handle": "Content on Hover or Focus",
              "title": "Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Dismissible",
                      "text": "A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;"
                    },
                    {
                      "handle": "Hoverable",
                      "text": "If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;"
                    },
                    {
                      "handle": "Persistent",
                      "text": "The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid."
                    }
                  ]
                },
                {
                  "type": "p",
                  "text": "Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "@@ ARIA: Using role=\"tooltip\""
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ CSS: Using hover and focus pseudo classes"
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F95",
                      "title": "Failure of Success Criterion 1.4.13 due to content shown on hover not being hoverable"
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ Failure to make content dismissable without moving pointer hover or keyboard focus"
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ Failure to meet by content on hover or focus not remaining visible until dismissed or invalid"
                    }
                  ]
                }
              ]
            }
          ],
          "techniques": []
        }
      ]
    },
    {
      "id": "WCAG2:operable",
      "num": "2",
      "versions": ["2.0", "2.1"],
      "handle": "Operable",
      "title": "User interface components and navigation must be operable.",
      "guidelines": [
        {
          "id": "WCAG2:keyboard-accessible",
          "alt_id": ["keyboard-operation"],
          "num": "2.1",
          "versions": ["2.0", "2.1"],
          "handle": "Keyboard Accessible",
          "title": "Make all functionality available from a keyboard.",
          "successcriteria": [
            {
              "id": "WCAG2:keyboard",
              "alt_id": ["keyboard-operation-keyboard-operable"],
              "dq_id": ["server-side-image-map"],
              "num": "2.1.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Keyboard",
              "title": "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not."
                },
                {
                  "type": "note",
                  "handle": "Note 2",
                  "text": "This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation."
                }
              ],

              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G202",
                      "title": "Ensuring keyboard control for all functionality"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Ensuring keyboard control by using one of the following techniques.",
                      "using": [
                        {
                          "id": "TECH:H91",
                          "title": "Using HTML form controls and links"
                        },
                        {
                          "id": "TECH:PDF3",
                          "title": "Ensuring correct tab and reading order in PDF documents"
                        },
                        {
                          "id": "TECH:PDF11",
                          "title": "Providing links and link text using the Link annotation and the /Link structure element in PDF documents"
                        },
                        {
                          "id": "TECH:PDF23",
                          "title": "Providing interactive form controls in PDF documents"
                        },
                        {
                          "id": "TECH:SL15",
                          "title": "Providing Keyboard Shortcuts that Work Across the Entire Silverlight Application"
                        }
                      ]
                    },
                    {
                      "id": "TECH:G90",
                      "title": "Providing keyboard-triggered event handlers",
                      "using": [
                        {
                          "id": "TECH:SCR20",
                          "title": "Using both keyboard and other device-specific functions"
                        },
                        {
                          "id": "TECH:SCR35",
                          "title": "Making actions keyboard accessible by using the onclick event of anchors and buttons"
                        },
                        {
                          "id": "TECH:SCR2",
                          "title": "Using redundant keyboard and mouse event handlers"
                        },
                        {
                          "id": "TECH:SL9",
                          "title": "Handling Key Events to Enable Keyboard Functionality in Silverlight"
                        },
                        {
                          "id": "TECH:SL14",
                          "title": "Providing Custom Control Key Handling for Keyboard Functionality in Silverlight"
                        }
                      ]
                    },
                    {
                      "id": "TECH:FLASH17",
                      "title": "Providing keyboard access to a Flash object and avoiding a keyboard trap",
                      "using": [
                        {
                          "id": "TECH:FLASH22",
                          "title": "Adding keyboard-accessible actions to static elements"
                        },
                        {
                          "id": "TECH:FLASH16",
                          "title": "Making actions keyboard accessible by using the click event on standard components"
                        },
                        {
                          "id": "TECH:FLASH14",
                          "title": "Using redundant keyboard and mouse event handlers in Flash"
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:SCR29",
                      "title": "Adding keyboard-accessible actions to static HTML elements"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F54",
                      "title": "Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function"
                    },
                    {
                      "id": "TECH:F55",
                      "title": "Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
                    },
                    {
                      "id": "TECH:F42",
                      "title": "Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:no-keyboard-trap",
              "alt_id": ["keyboard-operation-trapping"],
              "num": "2.1.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "No Keyboard Trap",
              "title": "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G21",
                      "title": "Ensuring that users are not trapped in content",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G21.html",
                      "tests": {
                        "procedure": "1. Tab through content from start to finish. \n2. Check to see that keyboard focus is not trapped in any of the content. \n3. If keyboard focus appears to be trapped in any of the content, \ncheck that help information is available explaining \nhow to exit the content and can be accessed via the keyboard.",
                        "expected-results": "#2 is false"
                      }
                    },
                    {
                      "id": "TECH:FLASH17",
                      "title": "Providing keyboard access to a Flash object and avoiding a keyboard trap",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH17.html",
                      "tests": {
                        "procedure": "For a Flash content on a web page: \n1. If possible, confirm that the source of the Flash content \nimports and initializes the SWFFocus class. \n2. Press the tab key to move through tabbable items on the page \n3. Confirm that it is possible to tab into the Flash content \n4. Continue tabbing and confirm that it is possible to \ntab out of the flash content",
                        "expected-results": "Checks 3 and 4 are true"
                      }
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F10",
                      "title": "Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F10.html",
                      "tests": {
                        "procedure": "1. Using a keyboard, navigate through the content. \n2. Check to see that the keyboard focus is not 'trapped' \nand it is possible to move keyboard focus out of the \nplug-in content without closing the user agent \nor restarting the system.",
                        "expected-results": "If the keyboard focus becomes 'trapped,' then this failure condition applies and content fails the Success Criterion and conformance requirement 5."
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:keyboard-no-exception",
              "alt_id": ["keyboard-operation-all-funcs"],
              "num": "2.1.3",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Keyboard (No Exception)",
              "title": "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.",
              "techniques": [{ "sufficient": [] }, { "advisory": [] }, { "failure": [] }]
            },
            {
              "id": "WCAG2:character-key-shortcuts",
              "alt_id": [],
              "num": "2.1.4",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts",
              "versions": ["2.1"],
              "level": "A",
              "handle": "Character Key Shortcuts",
              "title": "If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Turn off",
                      "text": "A mechanism is available to turn the shortcut off;"
                    },
                    {
                      "handle": "Remap",
                      "text": "A mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt);"
                    },
                    {
                      "handle": "Active only on focus",
                      "text": "The keyboard shortcut for a user interface component is only active when that component has focus."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "Users have a way to turn off single-key shortcuts."
                    },
                    {
                      "id": "TECH:text",
                      "title": "A mechanism is provided to allow users to change character-key shortcuts. The remapping mechanism includes non-printing characters. The alternative shortcuts could be longer strings of up to 25 characters that would directly serve as native speech commands for any speech engine."
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:text",
                      "title": "Failure of Success Criteria 2.1.4 due to a webpage or web app that includes single-key shortcuts not including a control that allows users to turn the shortcuts off or a control that allows users to change the shortcuts to key combinations that include keys that are not upper or lower-case letters, punctuation, number, or symbol characters."
                    }
                  ]
                }
              ]
            }
          ],
          "techniques": []
        },
        {
          "id": "WCAG2:enough-time",
          "alt_id": ["time-limits"],
          "num": "2.2",
          "versions": ["2.0", "2.1"],
          "handle": "Enough Time",
          "title": "Provide users enough time to read and use content.",
          "successcriteria": [
            {
              "id": "WCAG2:timing-adjustable",
              "alt_id": ["time-limits-required-behaviors"],
              "dq_id": ["meta-refresh"],
              "num": "2.2.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Timing Adjustable",
              "title": "For each time limit that is set by the content, at least one of the following is true:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Turn off",
                      "text": "The user is allowed to turn off the time limit before encountering it; or"
                    },
                    {
                      "handle": "Adjust",
                      "text": "The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or"
                    },
                    {
                      "handle": "Extend",
                      "text": "The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, \"press the space bar\"), and the user is allowed to extend the time limit at least ten times; or"
                    },
                    {
                      "handle": "Real-time Exception",
                      "text": "The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or"
                    },
                    {
                      "handle": "Essential Exception",
                      "text": "The time limit is essential and extending it would invalidate the activity; or"
                    },
                    {
                      "handle": "20 Hour Exception",
                      "text": "The time limit is longer than 20 hours."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If there are session time limits:",
                          "techniques": [
                            {
                              "id": "TECH:G133",
                              "title": "Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit"
                            },
                            {
                              "id": "TECH:G198",
                              "title": "Providing a way for the user to turn the time limit off"
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If a time limit is controlled by a script on the page:",
                          "techniques": [
                            {
                              "id": "TECH:G198",
                              "title": "Providing a way for the user to turn the time limit off"
                            },
                            {
                              "id": "TECH:G180",
                              "title": "Providing the user with a means to set the time limit to 10 times the default time limit"
                            },
                            {
                              "and": [
                                {
                                  "id": "TECH:SCR16",
                                  "title": "Providing a script that warns the user a time limit is about to expire"
                                },
                                {
                                  "id": "TECH:SCR1",
                                  "title": "Allowing the user to extend the default time limit"
                                }
                              ]
                            },
                            {
                              "id": "TECH:FLASH19",
                              "title": "Providing a script that warns the user a time limit is about to expire and provides a way to extend it"
                            },
                            {
                              "id": "TECH:FLASH24",
                              "title": "Allowing the user to extend the default time limit"
                            },
                            {
                              "id": "TECH:SL21",
                              "title": "Replacing A Silverlight Timed Animation With a Nonanimated Element"
                            }
                          ]
                        },
                        {
                          "title": "Situation C: If there are time limits on reading:",
                          "techniques": [
                            {
                              "id": "TECH:G4",
                              "title": "Allowing the content to be paused and restarted from where it was paused"
                            },
                            {
                              "id": "TECH:G198",
                              "title": "Providing a way for the user to turn the time limit off"
                            },
                            {
                              "id": "TECH:SCR33",
                              "title": "Using script to scroll content, and providing a mechanism to pause it"
                            },
                            {
                              "id": "TECH:SCR36",
                              "title": "Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F40",
                      "title": "Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit"
                    },
                    {
                      "id": "TECH:F41",
                      "title": "Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page"
                    },
                    {
                      "id": "TECH:F58",
                      "title": "Failure of Success Criterion 2.2.1 due to using server-side techniques to automatically redirect pages after a time-out"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:pause-stop-hide",
              "alt_id": ["time-limits-pause"],
              
              "num": "2.2.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Pause, Stop, Hide",
              "title": "For moving, blinking, scrolling, or auto-updating information, all of the following are true:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Moving, blinking, scrolling",
                      "text": "For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and"
                    },
                    {
                      "handle": "Auto-updating",
                      "text": "For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential."
                    }
                  ]
                },
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "For requirements related to flickering or flashing content, refer to Guideline 2.3."
                },
                {
                  "type": "note",
                  "handle": "Note 2",
                  "text": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference."
                },
                {
                  "type": "note",
                  "handle": "Note 3",
                  "text": "Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so."
                },
                {
                  "type": "note",
                  "handle": "Note 4",
                  "text": "An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G4",
                      "title": "Allowing the content to be paused and restarted from where it was paused"
                    },
                    {
                      "id": "TECH:SL11",
                      "title": "Pausing or Stopping A Decorative Silverlight Animation"
                    },
                    {
                      "id": "TECH:SL12",
                      "title": "Pausing, Stopping, or Playing Media in Silverlight MediaElements"
                    },
                    {
                      "id": "TECH:SCR33",
                      "title": "Using script to scroll content, and providing a mechanism to pause it"
                    },
                    {
                      "id": "TECH:FLASH35",
                      "title": "Using script to scroll Flash content, and providing a mechanism to pause it"
                    },
                    {
                      "id": "TECH:G11",
                      "title": "Creating content that blinks for less than 5 seconds"
                    },
                    {
                      "id": "TECH:G187",
                      "title": "Using a technology to include blinking content that can be turned off via the user agent"
                    },
                    {
                      "id": "TECH:G152",
                      "title": "Setting animated gif images to stop blinking after n cycles (within 5 seconds)"
                    },
                    {
                      "id": "TECH:SCR22",
                      "title": "Using scripts to control blinking and stop it in five seconds or less"
                    },
                    {
                      "id": "TECH:FLASH36",
                      "title": "Using scripts to control blinking and stop it in five seconds or less"
                    },
                    {
                      "id": "TECH:G186",
                      "title": "Using a control in the Web page that stops moving, blinking, or auto-updating content"
                    },
                    {
                      "id": "TECH:G191",
                      "title": "Providing a link, button, or other mechanism that reloads the page without any blinking content"
                    },
                    {
                      "id": "TECH:SL24",
                      "title": "Using AutoPlay to Keep Silverlight Media from Playing Automatically"
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F16",
                      "title": "Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content"
                    },
                    {
                      "id": "TECH:F47",
                      "title": "Failure of Success Criterion 2.2.2 due to using the blink element"
                    },
                    {
                      "id": "TECH:F4",
                      "title": "Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds"
                    },
                    {
                      "id": "TECH:F50",
                      "title": "Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less"
                    },
                    {
                      "id": "TECH:F7",
                      "title": "Failure of Success Criterion 2.2.2 due to an object or applet, such as Java or Flash, for more than five seconds"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:no-timing",
              "alt_id": ["time-limits-no-exceptions"],
              "num": "2.2.3",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "No Timing",
              "title": "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G5",
                      "title": "Allowing users to complete an activity without any time limit"
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:interruptions",
              "alt_id": ["time-limits-postponed"],
              "num": "2.2.4",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Interruptions",
              "title": "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G75",
                      "title": "Providing a mechanism to postpone any updating of content"
                    },
                    {
                      "id": "TECH:G76",
                      "title": "Providing a mechanism to request an update of the content instead of updating automatically"
                    },
                    {
                      "id": "TECH:SCR14",
                      "title": "Using scripts to make nonessential alerts optional"
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F40",
                      "title": "Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit"
                    },
                    {
                      "id": "TECH:F41",
                      "title": "Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:re-authenticating",
              "alt_id": ["time-limits-server-timeout"],
              "num": "2.2.5",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Re-authenticating",
              "title": "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "Providing options to continue without loss of data using one of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:G105",
                          "title": "Saving data so that it can be used after a user re-authenticates"
                        },
                        {
                          "id": "TECH:G181",
                          "title": "Encoding user data as hidden or encrypted data in a re-authorization page"
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F12",
                      "title": "Failure of Success Criterion 2.2.5 due to having a session time limit without a mechanism re-authentication"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:timeouts",
              "alt_id": [],
              "num": "2.2.6",
              "versions": ["2.1"],
              "level": "AAA",
              "handle": "Timeouts",
              "title": "Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "Setting a session timeout to occur following at least 20 hours of inactivity."
                    },
                    {
                      "id": "TECH:text",
                      "title": "Store user data for more than 20 hours."
                    },
                    {
                      "id": "TECH:text",
                      "title": "Provide a warning of the duration of user inactivity at the start of a process."
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            }
          ],
          "techniques": []
        },
        {
          "id": "WCAG2:seizures-and-physical-reactions",
          "alt_id": [],
          "num": "2.3",
          "versions": ["2.1"],
          "handle": "Seizures and Physical Reactions",
          "title": "Do not design content in a way that is known to cause seizures or physical reactions.",
          "successcriteria": [
            {
              "id": "WCAG2:three-flashes-or-below-threshold",
              "alt_id": ["seizure-does-not-violate"],
              "num": "2.3.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Three Flashes or Below Threshold",
              "title": "Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G19",
                      "title": "Ensuring that no component of the content flashes more than three times in any 1-second period",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G19.html",
                      "tests": {
                        "procedure": "1. Check that there are no more than three flashes \nduring any 1-second period. \n2. If there are three flashes, check that the \nLight/Dark status at the end of the 1-second period \nis the same as at the start.",
                        "expected-results": "Both Step 1 and Step 2 are true."
                      }
                    },
                    {
                      "id": "TECH:G176",
                      "title": "Keeping the flashing area small enough",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G176.html",
                      "tests": {
                        "procedure": "1. The small safe area is calculated. \n2. Check that only one area of the screen is flashing at any time. \n3. Check that the flashing content would fit into \na contiguous container whose area is less than the small safe area.",
                        "expected-results": "Checks #2 and #3 are true."
                      }
                    },
                    {
                      "id": "TECH:G15",
                      "title": "Using a tool to ensure that content does not violate the general flash threshold or red flash threshold",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G15.html",
                      "tests": {
                        "procedure": "Check to see to see that content does not violate \nthe general flash and/or red flash threshold \n1. Use a tool to determine that neither the General Flash \nnor Red Flash threshold were exceeded",
                        "expected-results": "Check #1 is true."
                      }
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:three-flashes",
              "alt_id": ["seizure-three-times"],
              "num": "2.3.2",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Three Flashes",
              "title": "Web pages do not contain anything that flashes more than three times in any one second period.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G19",
                      "title": "Ensuring that no component of the content flashes more than three times in any 1-second period"
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:animation-from-interactions",
              "alt_id": [],
              "num": "2.3.3",
              "versions": ["2.1"],
              "level": "AAA",
              "handle": "Animation from Interactions",
              "title": "Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:C39",
                      "title": "Using the CSS reduce-motion query to prevent motion"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Gx: Allowing users to set a preference that prevents animation."
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            }
          ],
          "techniques": []
        },
        {
          "id": "WCAG2:navigable",
          "alt_id": ["navigation-mechanisms"],
          "num": "2.4",
          "versions": ["2.0", "2.1"],
          "handle": "Navigable",
          "title": "Provide ways to help users navigate, find content, and determine where they are.",
          "successcriteria": [
            {
              "id": "WCAG2:bypass-blocks",
              "alt_id": ["navigation-mechanisms-skip"],
              "num": "2.4.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Bypass Blocks",
              "title": "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "Creating links to skip blocks of repeated material using one of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:G1",
                          "title": "Adding a link at the top of each page that goes directly to the main content area"
                        },
                        {
                          "id": "TECH:G123",
                          "title": "Adding a link at the beginning of a block of repeated content to go to the end of the block"
                        },
                        {
                          "id": "TECH:G124",
                          "title": "Adding links at the top of the page to each area of the content"
                        },
                        {
                          "id": "TECH:SL25",
                          "title": "Using Controls and Programmatic Focus to Bypass Blocks of Content in Silverlight"
                        }
                      ]
                    },
                    {
                      "id": "TECH:text",
                      "title": "Grouping blocks of repeated material in a way that can be skipped, using one of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:ARIA11",
                          "title": "Using ARIA landmarks to identify regions of a page"
                        },
                        {
                          "id": "TECH:H69",
                          "title": "Providing heading elements at the beginning of each section of content"
                        },
                        {
                          "id": "TECH:PDF9",
                          "title": "Providing headings by marking content with heading tags in PDF documents"
                        },
                        {
                          "and": [
                            {
                              "id": "TECH:H70",
                              "title": "Using frame elements to group blocks of repeated material"
                            },
                            {
                              "id": "TECH:H64",
                              "title": "Using the title attribute of the frame and iframe elements"
                            }
                          ]
                        },
                        {
                          "id": "TECH:SCR28",
                          "title": "Using an expandable and collapsible menu to bypass block of content"
                        },
                        {
                          "id": "TECH:SL29",
                          "title": "Using Silverlight \"List\" Controls to Define Blocks that can be Bypassed"
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:C6",
                      "title": "Positioning content based on structural markup"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:page-titled",
              "alt_id": ["navigation-mechanisms-title"],
              "dq_id":["document-title"],
              "num": "2.4.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/page-titled",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Page Titled",
              "title": "Web pages have titles that describe topic or purpose.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G88",
                      "title": "Providing descriptive titles for Web pages",
                      "using": [
                        {
                          "id": "TECH:H25",
                          "title": "Providing a title using the title element"
                        },
                        {
                          "id": "TECH:PDF18",
                          "title": "Specifying the document title using the Title entry in the document information dictionary of a PDF document"
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G127",
                      "title": "Identifying a Web page's relationship to a larger collection of Web pages"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F25",
                      "title": "Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:focus-order",
              "alt_id": ["navigation-mechanisms-focus-order"],
              "num": "2.4.3",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Focus Order",
              "title": "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G59",
                      "title": "Placing the interactive elements in an order that follows sequences and relationships within the content",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G59.html",
                      "tests": {
                        "procedure": "1. Determine the order of interactive elements in the content. \n2. Determine the logical order of interactive elements. \n3. Check that the order of the interactive elements in the content \nis the same as the logical order.",
                        "expected-results": "Check #3 is true."
                      }
                    },
                    {
                      "id": "TECH:text",
                      "title": "Giving focus to elements in an order that follows sequences and relationships within the content using one of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:H4",
                          "title": "Creating a logical tab order through links, form controls, and objects",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/html/H4.html",
                          "tests": {
                            "procedure": "1. Check if tabindex is used \n2. If tabindex is used, check that the tab order specified by the tabindex \nattributes follows relationships in the content.",
                            "expected-results": "Check #2 is true."
                          }
                        },
                        {
                          "id": "TECH:FLASH15",
                          "title": "Using the tabIndex property to specify a logical reading order and a logical tab order in Flash",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH15.html",
                          "tests": {
                            "procedure": "1. Use a screen reader to navigate through \nthe Flash movie, one element at a time. \n2. Check that the order in which the screen reader \nannounces the content, matches the logical visual order. \n3. When focus has been placed inside the Flash movie, \npress the Tab key repeatedly to traverse its contents by keyboard. \n4. Verify that all interactive and focusable elements \nare reachable by keyboard, in a logical order.",
                            "expected-results": "Checks #2 and #4 are true."
                          }
                        },
                        {
                          "id": "TECH:C27",
                          "title": "Making the DOM order match the visual order",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/css/C27.html",
                          "tests": {
                            "procedure": "1. Visually examine the order of the content in the Web page \nas it is presented to the end user. \n2. Examine the elements in the DOM using a tool \nthat allows you to see the DOM. \n3. Ensure that the order of the content in the source code \nsections match the visual presentation of the content in the Web page. \n(e.g., for an English language page the order is from top to bottom \nand from left to right.)",
                            "expected-results": "Step #3 is true."
                          }
                        },
                        {
                          "id": "TECH:PDF3",
                          "title": "Ensuring correct tab and reading order in PDF documents",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3.html",
                          "tests": {
                            "procedure": "1. Verify that the content is in the correct \nreading order by one of the following: \n- Read the PDF document with a screen reader or a tool that reads aloud, \nlistening to hear that each element is read in the correct order. \n- Use a tool that exposes the document through the accessibility API, and verify that the reading order is correct. \n2. Verify that the tab order is correct for focusable content by one of the following: \n- Use the tab key to traverse the focus order in the document \n- Use a tool that is capable of showing the page object entry \nthat specifies the tab order setting to open the PDF document \nand view the setting.",
                            "expected-results": "#1 and Check #2 are true."
                          }
                        },
                        {
                          "id": "TECH:SL34",
                          "title": "Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL34.html",
                          "tests": {
                            "procedure": "1. Using a browser that supports Silverlight, open \nan HTML page that references a Silverlight application through an object tag. \n2. Engage the screen reader. Press the TAB key \nto traverse the sequence of elements inside the Silverlight content area. \n3. Verify that the order in which elements are \ntraversed in a tab sequence is also the expected order of the \nelements as they are presented visually, particularly in such \ncases where the order of each element is significant per SC 1.3.2.",
                            "expected-results": "#3 is true."
                          }
                        }
                      ]
                    },
                    {
                      "id": "TECH:text",
                      "title": "Changing a Web page dynamically using one of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:SCR26",
                          "title": "Inserting dynamic content into the Document Object Model immediately following its trigger element",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR26.html",
                          "tests": {
                            "procedure": "1. Find all areas of the page that trigger dialogs that are not pop-up windows. \n2. Check that the dialogs are triggered from the click event of a button or a link. \n3. Using a tool that allows you to inspect the DOM generated by script, \ncheck that the dialog is next in the DOM.",
                            "expected-results": "#2 and #3 are true."
                          }
                        },
                        {
                          "id": "TECH:SCR37",
                          "title": "Creating Custom Dialogs in a Device Independent Way",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR37.html",
                          "tests": {
                            "procedure": "1. Find all areas of the page that trigger dialogs that are not pop-up windows. \n2. Check that the dialogs can be opened by tabbing to the area and hitting enter. \n3. Check that, once opened, the dialog is next in the tab order. \n4. Check that the dialogs are triggered from \nthe click event of a button or a link. \n5. Using a tool that allows you to inspect the DOM generated by script, \ncheck that the dialog is next in the DOM.",
                            "expected-results": "Checks #2, #3, #4 and #5 are true."
                          }
                        },
                        {
                          "id": "TECH:SCR27",
                          "title": "Reordering page sections using the Document Object Model",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR27.html",
                          "tests": {
                            "procedure": "1. Find all components in the Web Unit which can be reordered via drag and drop. \n2. Check that there is also a mechanism to reorder them using menus build of lists of links. \n3. Check that the menus are contained within the reorderable items in the DOM. \n4. Check that scripts for reordering are triggered only from the onclick event of links. \n5. Check that items are reordered in the DOM, not only visually.",
                            "expected-results": "#2 through #5 are true."
                          }
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F44",
                      "title": "Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F44.html",
                      "tests": {
                        "procedure": "1. If tabindex is used, check that the tab order \nspecified by the tabindex attributes follows relationships in the \ncontent.",
                        "expected-results": "If check #1 is false, then this failure condition applies and content fails the Success Criterion."
                      }
                    },
                    {
                      "id": "TECH:F85",
                      "title": "Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F85.html",
                      "tests": {
                        "procedure": "For each menu or dialog embedded on a Web page that is \nopened via a trigger control: \n1. Activate the trigger control via the keyboard. \n- Check whether focus is in the menu or dialog. \n- Check whether advancing the focus in the sequential navigation order \nputs focus in the menu or dialog. \n2. Dismiss the menu or dialog. \n- Check whether focus is on the trigger control. \n- Check whether advancing the focus backwards in the sequential \nnavigation order puts focus in the trigger control.",
                        "expected-results": "- If both points under step 1 are false, then this failure condition applies and the content fails this success criterion. - If both points under step 2 are false, then this failure condition applies and the content fails this success criterion."
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:link-purpose-in-context",
              "alt_id": ["navigation-mechanisms-refs"],
              "dq_id":["link-name"],
              "num": "2.4.4",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Link Purpose (In Context)",
              "title": "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G91",
                      "title": "Providing link text that describes the purpose of a link"
                    },
                    {
                      "id": "TECH:H30",
                      "title": "Providing link text that describes the purpose of a link for anchor elements"
                    },
                    {
                      "id": "TECH:H24",
                      "title": "Providing text alternatives for the area elements of image maps"
                    },
                    {
                      "id": "TECH:FLASH27",
                      "title": "Providing button labels that describe the purpose of a button"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Allowing the user to choose short or long link text using one of the techniques below:",
                      "using": [
                        {
                          "id": "TECH:G189",
                          "title": "Providing a control near the beginning of the Web page that changes the link text"
                        },
                        {
                          "id": "TECH:SCR30",
                          "title": "Using scripts to change the link text"
                        },
                        {
                          "id": "TECH:FLASH7",
                          "title": "Using scripting to change control labels"
                        }
                      ]
                    },
                    {
                      "id": "TECH:G53",
                      "title": "Identifying the purpose of a link using link text combined with the text of the enclosing sentence"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Providing a supplemental description of the purpose of a link using one of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:H33",
                          "title": "Supplementing link text with the title attribute"
                        },
                        {
                          "id": "TECH:C7",
                          "title": "Using CSS to hide a portion of the link text"
                        }
                      ]
                    },
                    {
                      "id": "TECH:text",
                      "title": "Identifying the purpose of a link using link text combined with programmatically determined link context using one of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:ARIA7",
                          "title": "Using aria-labelledby for link purpose"
                        },
                        {
                          "id": "TECH:ARIA8",
                          "title": "Using aria-label for link purpose"
                        },
                        {
                          "id": "TECH:H77",
                          "title": "Identifying the purpose of a link using link text combined with its enclosing list item"
                        },
                        {
                          "id": "TECH:H78",
                          "title": "Identifying the purpose of a link using link text combined with its enclosing paragraph"
                        },
                        {
                          "id": "TECH:H79",
                          "title": "Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells"
                        },
                        {
                          "id": "TECH:H81",
                          "title": "Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested"
                        }
                      ]
                    },
                    {
                      "id": "TECH:G91",
                      "title": "Providing link text that describes the purpose of a link",
                      "using": [
                        {
                          "id": "TECH:PDF11",
                          "title": "Providing links and link text using the Link annotation and the /Link structure element in PDF documents"
                        },
                        {
                          "id": "TECH:PDF13",
                          "title": "Providing replacement text using the /Alt entry for links in PDF documents"
                        },
                        {
                          "id": "TECH:SL18",
                          "title": "Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name"
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H2",
                      "title": "Combining adjacent image and text links for the same resource"
                    },
                    {
                      "id": "TECH:FLASH5",
                      "title": "Combining adjacent image and text buttons for the same resource"
                    },
                    {
                      "id": "TECH:H80",
                      "title": "Identifying the purpose of a link using link text combined with the preceding heading element"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F63",
                      "title": "Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link"
                    },
                    {
                      "id": "TECH:F89",
                      "title": "Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:multiple-ways",
              "alt_id": ["navigation-mechanisms-mult-loc"],
              "num": "2.4.5",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Multiple Ways",
              "title": "More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "Using two or more of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:G125",
                          "title": "Providing links to navigate to related Web pages"
                        },
                        {
                          "id": "TECH:G64",
                          "title": "Providing a Table of Contents"
                        },
                        {
                          "id": "TECH:PDF2",
                          "title": "Creating bookmarks in PDF documents"
                        },
                        {
                          "id": "TECH:G63",
                          "title": "Providing a site map"
                        },
                        {
                          "id": "TECH:G161",
                          "title": "Providing a search function to help users find content"
                        },
                        {
                          "id": "TECH:G126",
                          "title": "Providing a list of links to all other Web pages"
                        },
                        {
                          "id": "TECH:G185",
                          "title": "Linking to all of the pages on the site from the home page"
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H59",
                      "title": "Using the link element and navigation tools"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:headings-and-labels",
              "alt_id": ["navigation-mechanisms-descriptive"],
              "num": "2.4.6",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Headings and Labels",
              "title": "Headings and labels describe topic or purpose.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G130",
                      "title": "Providing descriptive headings"
                    },
                    {
                      "id": "TECH:G131",
                      "title": "Providing descriptive labels"
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:focus-visible",
              "alt_id": ["navigation-mechanisms-focus-visible"],
              "num": "2.4.7",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Focus Visible",
              "title": "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G149",
                      "title": "Using user interface components that are highlighted by the user agent when they receive focus"
                    },
                    {
                      "id": "TECH:C15",
                      "title": "Using CSS to change the presentation of a user interface component when it receives focus"
                    },
                    {
                      "id": "TECH:G165",
                      "title": "Using the default focus indicator for the platform so that high visibility default focus indicators will carry over"
                    },
                    {
                      "id": "TECH:G195",
                      "title": "Using an author-supplied, highly visible focus indicator"
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@@ Using a change of contrast ratio to provide a visible focus indicator"
                    },
                    {
                      "id": "TECH:SCR31",
                      "title": "Using script to change the background color or border of the element with focus"
                    },
                    {
                      "id": "TECH:FLASH20",
                      "title": "Reskinning Flash components to provide highly visible focus indication"
                    },
                    {
                      "id": "TECH:SL2",
                      "title": "Changing The Visual Focus Indicator in Silverlight"
                    },
                    {
                      "id": "TECH:SL7",
                      "title": "Designing a Focused Visual State for Custom Silverlight Controls"
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F55",
                      "title": "Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
                    },
                    {
                      "id": "TECH:F78",
                      "title": "Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:location",
              "alt_id": ["navigation-mechanisms-location"],
              "num": "2.4.8",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Location",
              "title": "Information about the user's location within a set of Web pages is available.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G65",
                      "title": "Providing a breadcrumb trail"
                    },
                    {
                      "id": "TECH:G63",
                      "title": "Providing a site map"
                    },
                    {
                      "id": "TECH:G128",
                      "title": "Indicating current location within navigation bars"
                    },
                    {
                      "id": "TECH:G127",
                      "title": "Identifying a Web page's relationship to a larger collection of Web pages",
                      "using": [
                        {
                          "id": "TECH:H59",
                          "title": "Using the link element and navigation tools"
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:PDF14",
                      "title": "Providing running headers and footers in PDF documents"
                    },
                    {
                      "id": "TECH:PDF17",
                      "title": "Specifying consistent page numbering for PDF documents"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:link-purpose-link-only",
              "alt_id": ["navigation-mechanisms-link"],
              "num": "2.4.9",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Link Purpose (Link Only)",
              "title": "A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:ARIA8",
                      "title": "Using aria-label for link purpose"
                    },
                    {
                      "id": "TECH:G91",
                      "title": "Providing link text that describes the purpose of a link"
                    },
                    {
                      "id": "TECH:H30",
                      "title": "Providing link text that describes the purpose of a link for anchor elements"
                    },
                    {
                      "id": "TECH:H24",
                      "title": "Providing text alternatives for the area elements of image maps"
                    },
                    {
                      "id": "TECH:FLASH27",
                      "title": "Providing button labels that describe the purpose of a button"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Allowing the user to choose short or long link text using one of the techniques below:",
                      "using": [
                        {
                          "id": "TECH:G189",
                          "title": "Providing a control near the beginning of the Web page that changes the link text"
                        },
                        {
                          "id": "TECH:SCR30",
                          "title": "Using scripts to change the link text"
                        },
                        {
                          "id": "TECH:FLASH7",
                          "title": "Using scripting to change control labels"
                        }
                      ]
                    },
                    {
                      "id": "TECH:text",
                      "title": "Providing a supplemental description of the purpose of a link using one of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:C7",
                          "title": "Using CSS to hide a portion of the link text"
                        }
                      ]
                    },
                    {
                      "id": "TECH:text",
                      "title": "Semantically indicating links using one of the following techniques:",
                      "using": [
                        {
                          "id": "TECH:PDF11",
                          "title": "Providing links and link text using the Link annotation and the /Link structure element in PDF documents"
                        },
                        {
                          "id": "TECH:PDF13",
                          "title": "Providing replacement text using the /Alt entry for links in PDF documents"
                        },
                        {
                          "id": "TECH:SL18",
                          "title": "Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name"
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H2",
                      "title": "Combining adjacent image and text links for the same resource"
                    },
                    {
                      "id": "TECH:FLASH5",
                      "title": "Combining adjacent image and text buttons for the same resource"
                    },
                    {
                      "id": "TECH:H33",
                      "title": "Supplementing link text with the title attribute"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F84",
                      "title": "Failure of Success Criterion 2.4.9 due to using a non-specific link such as \"click here\" or \"more\" without a mechanism to change the link text to specific text."
                    },
                    {
                      "id": "TECH:F89",
                      "title": "Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:section-headings",
              "alt_id": ["navigation-mechanisms-headings"],
              "dq_id": ["bypass"],
              "num": "2.4.10",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Section Headings",
              "title": "Section headings are used to organize the content.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "\"Heading\" is used in its general sense and includes titles and other ways to add a heading to different types of content."
                },
                {
                  "type": "note",
                  "handle": "Note 2",
                  "text": "This success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G141",
                      "title": "Organizing a page using headings"
                    },
                    {
                      "id": "TECH:H69",
                      "title": "Providing heading elements at the beginning of each section of content"
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            }
          ],
          "techniques": []
        },
        {
          "id": "WCAG2:input-modalities",
          "alt_id": [],
          "num": "2.5",
          "versions": ["2.1"],
          "handle": "Input Modalities",
          "title": "Make it easier for users to operate functionality through various inputs beyond keyboard.",
          "successcriteria": [
            {
              "id": "WCAG2:pointer-gestures",
              "alt_id": [],
              "num": "2.5.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures",
              "versions": ["2.1"],
              "level": "A",
              "handle": "Pointer Gestures",
              "title": "All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "GXXX: Do not rely on path-based gestures"
                    },
                    {
                      "id": "TECH:text",
                      "title": "GXXX: Do not rely on multipoint gestures"
                    },
                    {
                      "id": "TECH:text",
                      "title": "GXXX: Provide controls that do not require complex gestures and perform the same function as complex gestures"
                    },
                    {
                      "id": "TECH:text",
                      "title": "GXXX: Single-point activation for spatial positioning and manipulation"
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:text",
                      "title": "Functionality can be operated by pointer input but not with single-point activation alone"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:pointer-cancellation",
              "alt_id": [],
              "num": "2.5.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation",
              "versions": ["2.1"],
              "level": "A",
              "handle": "Pointer Cancellation",
              "title": "For functionality that can be operated using a single pointer, at least one of the following is true:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "No Down-Event",
                      "text": "The down-event of the pointer is not used to execute any part of the function;"
                    },
                    {
                      "handle": "Abort or Undo",
                      "text": "Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;"
                    },
                    {
                      "handle": "Up Reversal",
                      "text": "The up-event reverses any outcome of the preceding down-event;"
                    },
                    {
                      "handle": "Essential",
                      "text": "Completing the function on the down-event is essential."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G210",
                      "title": "Ensuring that drag-and-drop actions can be cancelled",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G210.html",
                      "tests": {
                        "procedure": "For content that is draggable, check whether the \ndrag-and-drop action can be reversed by: \n1. Releasing the picked-up item outside a drop target. \n2. Dragging the picked-up item back to its old position. \n3. A confirmation dialog or an undo \ncontrol appears after the item has been dropped.",
                        "expected-results": "At least one option of #1, #2, #3 is true"
                      }
                    },
                    {
                      "id": "TECH:G211",
                      "title": "Matching the accessible name to the visible label",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html",
                      "tests": {
                        "procedure": "1. For input controls, examine each input that has \nadjacent text which serves as its label. \n2. For each input, check \nthat the entire string of text (disregarding letter case and \npunctuation) matches the accessible name for the input, according to \nthe accessible name computation. \n3. For buttons, links, menus and \nother non-input controls, examine each control that contains text \nwhich serves as its label. \n4. For each non-input control, check \nthat the entire string of text (disregarding letter case and \npunctuation) matches the accessible name for the input",
                        "expected-results": "Checks #2 and #4 are true"
                      }
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ Touch events are only triggered when touch is removed from a control."
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:text",
                      "title": "@@ Failure of SC 2.5.3 due to activating a button on initial touch location rather than the final touch location."
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:label-in-name",
              "alt_id": [],
              "dq_id":["label-content-name-mismatch"],
              "num": "2.5.3",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name",
              "versions": ["2.1"],
              "level": "A",
              "handle": "Label in Name",
              "title": "For user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G208",
                      "title": "Including the text of the visible label as part of the accessible name"
                    },
                    {
                      "id": "TECH:G211",
                      "title": "Matching the accessible name to the visible label"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:text",
                      "title": "@@ If an icon has no accompanying text, consider using its hover text as its accessible name"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F96",
                      "title": "Failure due to the accessible name not containing the visible label text"
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ Accessible name contains the visible label text, but the words of the visible label are not in the same order as they are in the visible label text"
                    },
                    {
                      "id": "TECH:text",
                      "title": "@@ Accessible name contains the visible label text, but one or more other words are interspersed in the label"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:motion-actuation",
              "alt_id": [],
              "num": "2.5.4",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation",
              "versions": ["2.1"],
              "level": "A",
              "handle": "Motion Actuation",
              "title": "Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Supported Interface",
                      "text": "The motion is used to operate functionality through an accessibility supported interface;"
                    },
                    {
                      "handle": "Essential",
                      "text": "The motion is essential for the function and doing so would invalidate the activity."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G213",
                      "title": "Provide conventional controls and an application setting for motion activated input",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G213.html",
                      "tests": {
                        "procedure": "For each input that performs a function in response to a motion sensor: 1. Check that there \nis a mechanism to perform the same function that does not rely on a sensor. 2. Check that there is a \nuser setting which disables the motion detection.",
                        "expected-results": "Check #1 and #2 are true."
                      }
                    },
                    {
                      "id": "TECH:text",
                      "title": "GXXX: Supporting system level features which allow the user to disable motion actuation"
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:text",
                      "title": "FXXX: Failure of Success Criterion 2.5.4 due to functionality that can only be activated via devicemotion events (e.g., shaking or tilting)"
                    },
                    {
                      "id": "TECH:text",
                      "title": "FXXX: Failure of Success Criterion 2.5.4 due to an inability to disable motion actuation"
                    },
                    {
                      "id": "TECH:text",
                      "title": "FXXX: Failure of Success Criterion 2.5.4 due to disrupting or disabling system level features which allow the user to disable motion actuation"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:target-size",
              "alt_id": [],
              "num": "2.5.5",
              "versions": ["2.1"],
              "level": "AAA",
              "handle": "Target Size",
              "title": "The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Equivalent",
                      "text": "The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;"
                    },
                    {
                      "handle": "Inline",
                      "text": "The target is in a sentence or block of text;"
                    },
                    {
                      "handle": "User Agent Control",
                      "text": "The size of the target is determined by the user agent and is not modified by the author;"
                    },
                    {
                      "handle": "Essential",
                      "text": "A particular presentation of the target is essential to the information being conveyed."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "Ensuring that touch targets are at least 44 by 44 CSS pixels."
                    },
                    {
                      "id": "TECH:text",
                      "title": "Providing a mechanism to change the size of the target independent of magnification."
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:text",
                      "title": "Ensuring inline links provide sufficiently large activation target."
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:text",
                      "title": "Failure of success criterion 2.5.3 due to target size being less than 44 by 44 CSS pixels."
                    },
                    {
                      "id": "TECH:text",
                      "title": "Failure of success criterion 2.5.3 due to target size of a paragraph that is also a link being less than 44 x 44 CSS pixels."
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:concurrent-input-mechanisms",
              "alt_id": [],
              "num": "2.5.6",
              "versions": ["2.1"],
              "level": "AAA",
              "handle": "Concurrent Input Mechanisms",
              "title": "Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:text",
                      "title": "@@ Only using high-level, input-agnostic event handlers (focus, blur, click) in Javascript (operating systems/UAs fire these events for all input mechanisms)."
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F98",
                      "title": "Failure due to interactions being limited to touch-only on touchscreen devices"
                    }
                  ]
                }
              ]
            }
          ],
          "techniques": []
        }
      ]
    },
    {
      "id": "WCAG2:understandable",
      "num": "3",
      "versions": ["2.0", "2.1"],
      "handle": "Understandable",
      "title": "Information and the operation of the user interface must be understandable.",
      "guidelines": [
        {
          "id": "WCAG2:readable",
          "alt_id": ["meaning"],
          "num": "3.1",
          "versions": ["2.0", "2.1"],
          "handle": "Readable",
          "title": "Make text content readable and understandable.",
          "successcriteria": [
            {
              "id": "WCAG2:language-of-page",
              "dq_id":["html-has-lang", "html-lang-valid", "html-xml-lang-mismatch"],
              "alt_id": ["meaning-doc-lang-id"],
              "num": "3.1.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Language of Page",
              "title": "The default human language of each Web page can be programmatically determined.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:H57",
                      "title": "Using language attributes on the html element"
                    },
                    {
                      "id": "TECH:FLASH13",
                      "title": "Using HTML language attributes to specify language in Flash content"
                    },
                    {
                      "id": "TECH:PDF16",
                      "title": "Setting the default language using the /Lang entry in the document catalog of a PDF document"
                    },
                    {
                      "id": "TECH:PDF19",
                      "title": "Specifying the language for a passage or phrase with the Lang entry in PDF documents"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:SVR5",
                      "title": "Specifying the default language in the HTTP header"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:language-of-parts",
              "alt_id": ["meaning-other-lang-id"],
              "num": "3.1.2",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Language of Parts",
              "title": "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:H58",
                      "title": "Using language attributes to identify changes in the human language"
                    },
                    {
                      "id": "TECH:FLASH13",
                      "title": "Using HTML language attributes to specify language in Flash content"
                    },
                    {
                      "id": "TECH:PDF19",
                      "title": "Specifying the language for a passage or phrase with the Lang entry in PDF documents"
                    },
                    {
                      "id": "TECH:SL4",
                      "title": "Declaring Discrete Silverlight Objects to Specify Language Parts in the HTML DOM"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:SL27",
                      "title": "Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:unusual-words",
              "alt_id": ["meaning-idioms"],
              "num": "3.1.3",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Unusual Words",
              "title": "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If the word or phrase has a unique meaning within the Web page:",
                          "techniques": [
                            {
                              "id": "TECH:G101",
                              "title": "Providing the definition of a word or phrase used in an unusual or restricted way",
                              "using": [
                                {
                                  "id": "TECH:G55",
                                  "title": "Linking to definitions",
                                  "using": [
                                    {
                                      "id": "TECH:H40",
                                      "title": "Using description lists"
                                    },
                                    {
                                      "id": "TECH:H60",
                                      "title": "Using the link element to link to a glossary"
                                    }
                                  ]
                                },
                                {
                                  "id": "TECH:G112",
                                  "title": "Using inline definitions",
                                  "using": [
                                    {
                                      "id": "TECH:H54",
                                      "title": "Using the dfn element to identify the defining instance of a word"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "TECH:G101",
                              "title": "Providing the definition of a word or phrase used in an unusual or restricted way",
                              "using": [
                                {
                                  "id": "TECH:G55",
                                  "title": "Linking to definitions",
                                  "using": [
                                    {
                                      "id": "TECH:H40",
                                      "title": "Using description lists"
                                    },
                                    {
                                      "id": "TECH:H60",
                                      "title": "Using the link element to link to a glossary"
                                    }
                                  ]
                                },
                                {
                                  "id": "TECH:G62",
                                  "title": "Providing a glossary"
                                },
                                {
                                  "id": "TECH:G70",
                                  "title": "Providing a function to search an online dictionary"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If the word or phrase means different things within the same Web page:",
                          "techniques": [
                            {
                              "id": "TECH:G101",
                              "title": "Providing the definition of a word or phrase used in an unusual or restricted way",
                              "using": [
                                {
                                  "id": "TECH:G55",
                                  "title": "Linking to definitions",
                                  "using": [
                                    {
                                      "id": "TECH:H40",
                                      "title": "Using description lists"
                                    },
                                    {
                                      "id": "TECH:H60",
                                      "title": "Using the link element to link to a glossary"
                                    }
                                  ]
                                },
                                {
                                  "id": "TECH:G112",
                                  "title": "Using inline definitions",
                                  "using": [
                                    {
                                      "id": "TECH:H54",
                                      "title": "Using the dfn element to identify the defining instance of a word"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:abbreviations",
              "alt_id": ["meaning-located"],
              "num": "3.1.4",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Abbreviations",
              "title": "A mechanism for identifying the expanded form or meaning of abbreviations is available.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If the abbreviation has only one meaning within the Web page:",
                          "techniques": [
                            {
                              "id": "TECH:G102",
                              "title": "Providing the expansion or explanation of an abbreviation",
                              "using": [
                                {
                                  "id": "TECH:G97",
                                  "title": "Providing the first use of an abbreviation immediately before or after the expanded form"
                                },
                                {
                                  "id": "TECH:G55",
                                  "title": "Linking to definitions"
                                },
                                {
                                  "id": "TECH:H28",
                                  "title": "Providing definitions for abbreviations by using the abbr element"
                                },
                                {
                                  "id": "TECH:PDF8",
                                  "title": "Providing definitions for abbreviations via an E entry for a structure element"
                                }
                              ]
                            },
                            {
                              "id": "TECH:G102",
                              "title": "Providing the expansion or explanation of an abbreviation",
                              "using": [
                                {
                                  "id": "TECH:G55",
                                  "title": "Linking to definitions"
                                },
                                {
                                  "id": "TECH:G62",
                                  "title": "Providing a glossary"
                                },
                                {
                                  "id": "TECH:H60",
                                  "title": "Using the link element to link to a glossary"
                                },
                                {
                                  "id": "TECH:G70",
                                  "title": "Providing a function to search an online dictionary"
                                },
                                {
                                  "id": "TECH:H28",
                                  "title": "Providing definitions for abbreviations by using the abbr element"
                                },
                                {
                                  "id": "TECH:PDF8",
                                  "title": "Providing definitions for abbreviations via an E entry for a structure element"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If the abbreviation means different things within the same Web page:",
                          "techniques": [
                            {
                              "id": "TECH:G102",
                              "title": "Providing the expansion or explanation of an abbreviation",
                              "using": [
                                {
                                  "id": "TECH:G55",
                                  "title": "Linking to definitions"
                                },
                                {
                                  "id": "TECH:H28",
                                  "title": "Providing definitions for abbreviations by using the abbr element"
                                },
                                {
                                  "id": "TECH:PDF8",
                                  "title": "Providing definitions for abbreviations via an E entry for a structure element"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:reading-level",
              "alt_id": ["meaning-supplements"],
              "num": "3.1.5",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Reading Level",
              "title": "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G86",
                      "title": "Providing a text summary that can be understood by people with lower secondary education level reading ability"
                    },
                    {
                      "id": "TECH:G103",
                      "title": "Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes"
                    },
                    {
                      "id": "TECH:G79",
                      "title": "Providing a spoken version of the text"
                    },
                    {
                      "id": "TECH:G153",
                      "title": "Making the text easier to read"
                    },
                    {
                      "id": "TECH:G160",
                      "title": "Providing sign language versions of information, ideas, and processes that must be understood in order to use the content"
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:pronunciation",
              "alt_id": ["meaning-pronunciation"],
              "num": "3.1.6",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Pronunciation",
              "title": "A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G120",
                      "title": "Providing the pronunciation immediately following the word"
                    },
                    {
                      "id": "TECH:G121",
                      "title": "Linking to pronunciations"
                    },
                    {
                      "id": "TECH:G62",
                      "title": "Providing a glossary"
                    },
                    {
                      "id": "TECH:G163",
                      "title": "Using standard diacritical marks that can be turned off"
                    },
                    {
                      "id": "TECH:H62",
                      "title": "Using the ruby element"
                    }
                  ]
                },
                { "advisory": [] },
                { "failure": [] }
              ]
            }
          ],
          "techniques": []
        },
        {
          "id": "WCAG2:predictable",
          "alt_id": ["consistent-behavior"],
          "num": "3.2",
          "versions": ["2.0", "2.1"],
          "handle": "Predictable",
          "title": "Make Web pages appear and operate in predictable ways.",
          "successcriteria": [
            {
              "id": "WCAG2:on-focus",
              "alt_id": ["consistent-behavior-receive-focus"],
              "num": "3.2.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/on-focus",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "On Focus",
              "title": "When any user interface component receives focus, it does not initiate a change of context.",
              "sufficientNotes": [
                "A change of content is not always a change of context. This success criterion is automatically met if changes in content are not also changes of context."
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G107",
                      "title": "Using \"activate\" rather than \"focus\" as a trigger for changes of context",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G107.html",
                      "tests": {
                        "procedure": "1. Using a keyboard, cycle focus through all content 2. Check that no changes of context \noccur when any component receives focus.",
                        "expected-results": "#2 is true"
                      }
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G200",
                      "title": "Opening new windows and tabs from a link only when necessary",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html"
                    },
                    {
                      "id": "TECH:G201",
                      "title": "Giving users advanced warning when opening a new window",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G201.html",
                      "tests": {
                        "procedure": "For each link that opens automatically in a new window or tab when a change of context is \ninitiated by a user request: 1. Check that there is a warning spoken in assistive technology that this \nlink opens to a new window. 2. Check that there is a visual warning in text that this link opens to a \nnew window.",
                        "expected-results": "Checks #1 and check #2 are true."
                      }
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F55",
                      "title": "Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html",
                      "tests": {
                        "procedure": "1. Use the keyboard to verify that you can get to all interactive elements using the keyboard.\n 2. Check that when focus is placed on each element, focus remains there until user moves it.",
                        "expected-results": "If #2 is false then this failure condition applies and content fails the Success Criterion."
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:on-input",
              "alt_id": ["consistent-behavior-unpredictable-change"],
              "num": "3.2.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/on-input",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "On Input",
              "title": "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.",
              "sufficientNotes": [
                "A change of content is not always a change of context. This success criterion is automatically met if changes in content are not also changes of context."
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G80",
                      "title": "Providing a submit button to initiate a change of context",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G80.html",
                      "tests": {
                        "procedure": "1. Find all forms in the content 2. For each form, check that it has a submit button",
                        "expected-results": "#2 is true"
                      },
                      "using": [
                        {
                          "id": "TECH:H32",
                          "title": "Providing submit buttons",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/html/H32.html",
                          "tests": {
                            "procedure": "1. Find all forms in the content 2. For each form, check that it has a submit button \n(input type=\"submit\", input type=\"image\", or button type=\"submit\")",
                            "expected-results": "#2 is true"
                          }
                        },
                        {
                          "id": "TECH:H84",
                          "title": "Using a button with a select element to perform an action",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/html/H84.html",
                          "tests": {
                            "procedure": "For each select element/button element combination: 1. Check that focus (including \nkeyboard focus) on an option in the select element does not result in any actions 2. Check that \nselecting the button performs the action associated with the current select value",
                            "expected-results": "All checks are true."
                          }
                        },
                        {
                          "id": "TECH:FLASH4",
                          "title": "Providing submit buttons in Flash",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH4.html",
                          "tests": {
                            "procedure": "1. Find all interactive control instances (that are not submit buttons) in the flash \nmovie that can initiate a change of context, e.g. a combobox, radio button or checkbox. 2. For each \ninstance, confirm that the event handler(s) responsible for the change of context are not associated \nwith the controls themselves, but with a separate button instead.",
                            "expected-results": "#2 is true"
                          }
                        },
                        {
                          "id": "TECH:PDF15",
                          "title": "Providing submit buttons with the submit-form action in PDF forms",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF15.html",
                          "tests": {
                            "procedure": "1. For each page that submits a form, visually verify that the form contains a submit \nbutton and check one of the following: - Tab to the button and check that it submits the form in \nresponse to user action to select the button. - Open the PDF document with a tool that is capable of \nshowing the submit-form action and check that the button action is to submit the form.",
                            "expected-results": "#1 is true for each page that contains a form."
                          }
                        },
                        {
                          "id": "TECH:SL10",
                          "title": "Implementing a Submit-Form Pattern in Silverlight",
                          "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL10.html",
                          "tests": {
                            "procedure": "1. Using a browser that supports Silverlight, open an HTML page that references a \nSilverlight application through an object tag. To test UI Automation based behavior such as reading \nAutomationProperties.HelpText, use Microsoft Windows as platform. 2. Verify that the user interface \ndesign of the form includes a clearly indicated Submit button (a control that adequately \ncommunicates to users that activating it will cause input to be submitted and might cause a change \nof context). 3. Provide values for the various input fields of the form, and verify that doing so \ndoes not in and of itself change the context. 4. Verify that if change of context occurs at all, \nthat action is delayed until after the Submit button is activated.",
                            "expected-results": "#2, #3, and #4 are true."
                          }
                        }
                      ]
                    },
                    {
                      "id": "TECH:G13",
                      "title": "Describing what will happen before a change to a form control that causes a change of context to occur is made",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G13.html",
                      "tests": {
                        "procedure": "1. Locate content where changing the setting of a form control results in a change of \ncontext 2. Check to see that an explanation of what will happen when the control is changed is available \nprior to the controls activation",
                        "expected-results": "Check #2 is true"
                      }
                    },
                    {
                      "id": "TECH:SCR19",
                      "title": "Using an onchange event on a select element without causing a change of context",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR19.html",
                      "tests": {
                        "procedure": "1. Navigate to the trigger select element (in this example, the one to select continents) \nand change the value of the select. 2. Navigate to the select element that is updated by the trigger (in \nthis example, the one to select countries). 3. Check that the matching option values are displayed in \nthe other select element. 4. Navigate to the trigger select element, navigate through the options but do \nnot change the value. 5. Check that the matching option values are still displayed in the associated \nelement. - It is recommended that the select elements are tested with an assistive technology to verify \nthat the changes to the associated element are recognized.",
                        "expected-results": "Step #3 and #5 are true."
                      }
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G201",
                      "title": "Giving users advanced warning when opening a new window",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G201.html",
                      "tests": {
                        "procedure": "For each link that opens automatically in a new window or tab when a change of context is \ninitiated by a user request: 1. Check that there is a warning spoken in assistive technology that this \nlink opens to a new window. 2. Check that there is a visual warning in text that this link opens to a \nnew window.",
                        "expected-results": "Checks #1 and check #2 are true."
                      }
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F36",
                      "title": "Failure of Success Criterion 3.2.2 due to automatically submitting a form and given a value",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F36.html",
                      "tests": {
                        "procedure": "1. Enter data in all fields on page starting at top. 2. Enter data in last field and exit \nfrom it (tab out of it). 3. Check whether leaving the last field causes change of context.",
                        "expected-results": "If step #3 is true, then this failure condition applies and content fails the Success Criterion."
                      }
                    },
                    {
                      "id": "TECH:F37",
                      "title": "Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/failures/F37.html",
                      "tests": {
                        "procedure": "1. Find each form in a page. 2. For each form control that is a radio button, check box or \nan item in a select list, check if changing the selection of the control launches a new window. 3. For \neach new window resulting from step 2, check if the user is warned in advance.",
                        "expected-results": "If step #3 is false, then this failure condition applies and content fails the Success Criterion."
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:consistent-navigation",
              "alt_id": ["consistent-behavior-consistent-locations"],
              "num": "3.2.3",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Consistent Navigation",
              "title": "Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G61",
                      "title": "Presenting repeated components in the same relative order each time they appear"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:PDF14",
                      "title": "Providing running headers and footers in PDF documents"
                    },
                    {
                      "id": "TECH:PDF17",
                      "title": "Specifying consistent page numbering for PDF documents"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F66",
                      "title": "Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:consistent-identification",
              "alt_id": ["consistent-behavior-consistent-functionality"],
              "num": "3.2.4",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Consistent Identification",
              "title": "Components that have the same functionality within a set of Web pages are identified consistently.",
              "sufficientNotes": [
                "Text alternatives that are \u201cconsistent\u201d are not always \u201cidentical.\u201d For instance, you may have an graphical arrow at the bottom of a Web page that links to the next Web page. The text alternative may say \u201cGo to page 4.\u201d Naturally, it would not be appropriate to repeat this exact text alternative on the next Web page. It would be more appropriate to say \u201cGo to page 5\u201d. Although these text alternatives would not be identical, they would be consistent, and therefore would satisfy this Success Criterion.",
                "A single non-text-content-item may be used to serve different functions. In such cases, different text alternatives are necessary and should be used. Examples can be commonly found with the use of icons such as check marks, cross marks, and traffic signs. Their functions can be different depending on the context of the Web page. A check mark icon may function as \u201capproved\u201d, \u201ccompleted\u201d, or \u201cincluded\u201d, to name a few, depending on the situation. Using \u201ccheck mark\u201d as text alternative across all Web pages does not help users understand the function of the icon. Different text alternatives can be used when the same non-text content serves multiple functions."
              ],

              "techniques": [
                {
                  "sufficient": [
                    {
                      "and": [
                        {
                          "id": "TECH:G197",
                          "title": "Using labels, names, and text alternatives consistently for content that has the same functionality"
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F31",
                      "title": "Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:change-on-request",
              "alt_id": ["consistent-behavior-no-extreme-changes-context"],
              "num": "3.2.5",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Change on Request",
              "title": "Changes of context are initiated only by user request or a mechanism is available to turn off such changes.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If the Web page allows automatic updates:",
                          "techniques": [
                            {
                              "id": "TECH:G76",
                              "title": "Providing a mechanism to request an update of the content instead of updating automatically"
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If automatic redirects are possible:",
                          "techniques": [
                            {
                              "id": "TECH:SVR1",
                              "title": "Implementing automatic redirects on the server side instead of on the client side"
                            },
                            {
                              "id": "TECH:G110",
                              "title": "Using an instant client-side redirect",
                              "using": [
                                {
                                  "id": "TECH:H76",
                                  "title": "Using meta refresh to create an instant client-side redirect"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation C: If the Web page uses pop-up windows:",
                          "techniques": [
                            {
                              "id": "TECH:text",
                              "title": "Including pop-up windows using one of the following techniques:",
                              "using": [
                                {
                                  "id": "TECH:H83",
                                  "title": "Using the target attribute to open a new window on user request and indicating this in link text"
                                },
                                {
                                  "id": "TECH:SCR24",
                                  "title": "Using progressive enhancement to open new windows on user request"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation D: If using an onchange event on a select element:",
                          "techniques": [
                            {
                              "id": "TECH:SCR19",
                              "title": "Using an onchange event on a select element without causing a change of context"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G200",
                      "title": "Opening new windows and tabs from a link only when necessary"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F60",
                      "title": "Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field"
                    },
                    {
                      "id": "TECH:F61",
                      "title": "Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content"
                    },
                    {
                      "id": "TECH:F9",
                      "title": "Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element"
                    },
                    {
                      "id": "TECH:F22",
                      "title": "Failure of Success Criterion 3.2.5 due to opening windows that are not requested by the user"
                    },
                    {
                      "id": "TECH:F52",
                      "title": "Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded"
                    },
                    {
                      "id": "TECH:F41",
                      "title": "Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page"
                    }
                  ]
                }
              ]
            }
          ],
          "techniques": []
        },
        {
          "id": "WCAG2:input-assistance",
          "alt_id": ["minimize-error"],
          "num": "3.3",
          "versions": ["2.0", "2.1"],
          "handle": "Input Assistance",
          "title": "Help users avoid and correct mistakes.",
          "successcriteria": [
            {
              "id": "WCAG2:error-identification",
              "alt_id": ["minimize-error-identified"],
              "num": "3.3.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/error-identification",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Error Identification",
              "title": "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If a form contains fields for which information from the user is mandatory.",
                          "techniques": [
                            {
                              "id": "TECH:G83",
                              "title": "Providing text descriptions to identify required fields that were not completed",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G83.html",
                              "tests": {
                                "procedure": "1. Fill out a form, deliberately leaving one or more required (mandatory) fields \nblank, and submit it. 2. Check that a text description is provided identifying the mandatory \nfield(s) that was not completed. 3. Check that other data previously entered by the user is \nre-displayed, unless the data is in a security related field where it would be inappropriate to \nretain the data for re-display (e.g. password).",
                                "expected-results": "#2 and #3 are true"
                              }
                            },
                            {
                              "id": "TECH:ARIA21",
                              "title": "Using Aria-Invalid to Indicate An Error Field",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html",
                              "tests": {
                                "procedure": "For each form control that relies on aria-invalid to convey a validation failure: 1. \nCheck that aria-invalid is not set to true when a validation failure does not exist. 2. Check \nthat aria-invalid is set to true when a validation failure does exist. 3. Check that the \nprogrammatically associated labels / programmatically associated instructional text for the \nfield provide enough information to understand the error.",
                                "expected-results": "Checks #1-3 are true."
                              }
                            },
                            {
                              "id": "TECH:SCR18",
                              "title": "Providing client-side validation and alert",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18.html",
                              "tests": {
                                "procedure": "For form fields that require specific input: 1.Enter invalid data 2. Determine if an \nalert describing the error is provided.",
                                "expected-results": "#2 is true"
                              }
                            },
                            {
                              "id": "TECH:PDF5",
                              "title": "Indicating required form controls in PDF forms",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5.html",
                              "tests": {
                                "procedure": "For each form field that is required, verify that validation information and \ninstructions are provided by applying the following: 1. Check that the required status is \nindicated in the form control's label. 2. Leave the field blank and submit the form. Check that \nan alert describing the error is provided. 3. Use a tool that exposes the document through the \naccessibility API, and verify that the required property is indicated.",
                                "expected-results": "#1, #2, and #3 are true."
                              }
                            },
                            {
                              "id": "TECH:SL35",
                              "title": "Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35.html",
                              "tests": {
                                "procedure": "1. Using a browser that supports Silverlight, open an HTML page that references a \nSilverlight application through an object tag. The application is expected to contain form \nfields, and a Submit pattern for form interaction as described in. 2. Navigate through the items \nof a form until an editable field is read. Enter a value that triggers the validation. 3. \nNavigate to Submit button and activate it to attempt to submit the form. 4. Verify that a \nValidation Summary now appears, and is focusable. 5. Verify that the Validation Summary provides \nenough information to correct any error. 6. Navigate back to input elements that have validation \nissues. Correct the errors as suggested. 7. Tab to Submit button. Press ENTER to resubmit. 8. \nVerify that Validation Summary is no longer displayed and that the screen reader does not focus \nto/read any further validation information.",
                                "expected-results": "#4, #5, and #8 are true."
                              }
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If information provided by the user is required to be in a specific data format or of certain values.",
                          "techniques": [
                            {
                              "id": "TECH:ARIA18",
                              "title": "Using aria-alertdialog to Identify Errors",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18.html",
                              "tests": {
                                "procedure": "1. Trigger the error that causes the alertdialog to appear. 2. Determine that the \nalertdialog contains at least one focusable control, and the focus moves to that control when \nthe alertdialog opens. 3. Determine that the tab order is constrained within the alertdialog \nwhile it is open, and when the dialog is dismissed, the focus moves back to the position it had \nbefore the dialog opene, if possible. 4. Examine the element with role=\"alertdialog\" applied. \n5. Determine that either the aria-label or aria-labelledby attribute has been correctly used to \ngive the alertdialog an accessible name. 6. Determine that the contents of the alertdialog \nidentifies the input error. 7. Determine whether contents of the alertdialog suggests how to fix \nthe error.",
                                "expected-results": "Checks 2, 3, 5 and 6 are true. For SC 3.3.3, Check 7 is also true."
                              }
                            },
                            {
                              "id": "TECH:ARIA19",
                              "title": "Using ARIA role=alert or Live Regions to Identify Errors",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19.html",
                              "tests": {
                                "procedure": "1. Determine that an empty error container role=alert or aria-live=assertive \nattribute is present in the DOM at page load. 2. Trigger the error that causes the content in \nthe live region to appear or update. 3. Determine that the error message was injected into the \nalready present error container.",
                                "expected-results": "#1 and #3 are true."
                              }
                            },
                            {
                              "id": "TECH:ARIA21",
                              "title": "Using Aria-Invalid to Indicate An Error Field",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html",
                              "tests": {
                                "procedure": "For each form control that relies on aria-invalid to convey a validation failure: 1. \nCheck that aria-invalid is not set to true when a validation failure does not exist. 2. Check \nthat aria-invalid is set to true when a validation failure does exist. 3. Check that the \nprogrammatically associated labels / programmatically associated instructional text for the \nfield provide enough information to understand the error.",
                                "expected-results": "Checks #1-3 are true."
                              }
                            },
                            {
                              "id": "TECH:G84",
                              "title": "Providing a text description when the user provides information that is not in the list of allowed values",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G84.html",
                              "tests": {
                                "procedure": "1. Enter invalid data in a form field. 2. Check that information is provided in text \nabout the problem.",
                                "expected-results": "#2 is true."
                              }
                            },
                            {
                              "id": "TECH:G85",
                              "title": "Providing a text description when user input falls outside the required format or values",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G85.html",
                              "tests": {
                                "procedure": "1. Fill out a form, deliberately enter user input that falls outside the required \nformat or values 2. Check that a text description is provided that identifies the field in error \nand provides some information about the nature of the invalid entry and how to fix it. 3. Check \nthat other data previously entered by the user is re-displayed, unless the data is in a security \nrelated field where it would be inappropriate to retain the data for re-display (e.g. password).",
                                "expected-results": "#2 and #3 are true"
                              }
                            },
                            {
                              "id": "TECH:SCR18",
                              "title": "Providing client-side validation and alert",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18.html",
                              "tests": {
                                "procedure": "For form fields that require specific input: 1.Enter invalid data 2. Determine if an \nalert describing the error is provided.",
                                "expected-results": "#2 is true"
                              }
                            },
                            {
                              "id": "TECH:SCR32",
                              "title": "Providing client-side validation and adding error text via the DOM",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32.html",
                              "tests": {
                                "procedure": "Create error messages using anchor tags and appropriate scripting via the technique \nabove. 1. Load the page. 2. Enter a valid value in the field(s) associated with an error message \nand verify that no error messages are displayed. 3. Enter an invalid value in the field(s) \nassociated with an error message and verify that the correct error message for the field is \ndisplayed. 4. Verify that the error messages receive focus. 5. Enter a valid value in the field\n(s) associated with the displayed error message and verify that the error message is removed. 6. \nRepeat for all fields with associated error messages created via anchor tags. NOTE It is \nrecommended that you also run the above procedure using an assistive technology.",
                                "expected-results": "Checks #2, #3, #4, and #5 are all true."
                              }
                            },
                            {
                              "id": "TECH:FLASH12",
                              "title": "Providing client-side validation and adding error text via the accessible description",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH12.html",
                              "tests": {
                                "procedure": "When a Flash movie provides interactive forms that can be submitted, confirm that: \n1. The validation warnings are placed next to the control visually. 2. The validation warnings \nare added to the accessible name or description of each control.",
                                "expected-results": "#1 and #2 are true"
                              }
                            },
                            {
                              "id": "TECH:PDF22",
                              "title": "Indicating when user input falls outside the required format or values in PDF forms",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22.html",
                              "tests": {
                                "procedure": "For each form field that requires specific input, verify that validation information \nand instructions are provided by applying the following: 1. Check that the format or value that \nis required is indicated in the form control's label. 2. Use an erroneous format or value and \nmove off the field: make sure that an alert describing the error is provided.",
                                "expected-results": "#1 and #2 are true."
                              }
                            },
                            {
                              "id": "TECH:SL35",
                              "title": "Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight",
                              "url": "https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35.html",
                              "tests": {
                                "procedure": "1. Using a browser that supports Silverlight, open an HTML page that references a \nSilverlight application through an object tag. The application is expected to contain form \nfields, and a Submit pattern for form interaction as described in . 2. Navigate through the \nitems of a form until an editable field is read. Enter a value that triggers the validation. 3, \nNavigate to Submit button and activate it to attempt to submit the form. 4. Verify that a Validation Summary \nnow appears, and is focusable. 5. Verify that the Validation Summary provides enough information \nto correct any error. 6. Navigate back to input elements that have validation issues. Correct the \nerrors as suggested. 7. Tab to Submit button. Press ENTER to resubmit. 8. Verify that Validation \nSummary is no longer displayed and that the screen reader does not focus to/read any further \nvalidation information.",
                                "expected-results": "#4, #5, and #8 are true."
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G139",
                      "dq_id":["form-field-multiple-labels"],
                      "title": "Creating a mechanism that allows users to jump to errors",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G139.html",
                      "tests": {
                        "procedure": "1. Fill out a form, deliberately leaving a required (mandatory) field blank, and make an \ninput error on another field and submit the form. 2. Check that a text message is provided that \nidentifies the field that is missing required data. 3. Check that a text message is provided that \nidentifies the field with the input error. 4. Check that there is a link to each field that is missing \nrequired data from the missing data message 5. Check that there is a link to the list of errors from the \nerror message. NOTE Success Criterion 3.3.2 requires that if an input error is detected and suggestions \nfor correction are known and can be provided without jeopardizing the security or purpose of the \ncontent, the suggestions are provided to the user.",
                        "expected-results": "- If #2 is true, then #4 is true. - If #3 is true, then #5 is true."
                      }
                    },
                    {
                      "id": "TECH:G199",
                      "title": "Providing success feedback when data is submitted successfully",
                      "url": "https://www.w3.org/WAI/WCAG21/Techniques/general/G199.html",
                      "tests": {
                        "procedure": "1. Fill in form fields with no errors. 2. Submit the form. 3. Check that a feedback message on the screen confirms that the submission was successful.",
                        "expected-results": "Check #3 is true."
                      }
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:labels-or-instructions",
              "alt_id": ["minimize-error-cues"],
              "num": "3.3.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions",
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Labels or Instructions",
              "title": "Labels or instructions are provided when content requires user input.",
              "sufficientNotes": [
                "The techniques at the end of the above list should be considered \u201clast resort\u201d and only used when the other techniques cannot be applied to the page. The earlier techniques are preferred because they increase accessibility to a wider user group."
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G131",
                      "title": "Providing descriptive labels",
                      "using": [
                        {
                          "id": "TECH:ARIA1",
                          "title": "Using the aria-describedby property to provide a descriptive label for user interface controls"
                        },
                        {
                          "id": "TECH:ARIA9",
                          "title": "Using aria-labelledby to concatenate a label from several text nodes"
                        },
                        {
                          "id": "TECH:ARIA17",
                          "title": "Using grouping roles to identify related form controls"
                        },
                        {
                          "id": "TECH:G89",
                          "title": "Providing expected data format and example"
                        },
                        {
                          "id": "TECH:G184",
                          "title": "Providing text instructions at the beginning of a form or set of fields that describes the necessary input"
                        },
                        {
                          "id": "TECH:G162",
                          "title": "Positioning labels to maximize predictability of relationships"
                        },
                        {
                          "id": "TECH:G83",
                          "title": "Providing text descriptions to identify required fields that were not completed"
                        },
                        {
                          "id": "TECH:H90",
                          "title": "Indicating required form controls using label or legend"
                        },
                        {
                          "id": "TECH:FLASH10",
                          "title": "Indicating required form controls in Flash"
                        },
                        {
                          "id": "TECH:PDF5",
                          "title": "Indicating required form controls in PDF forms"
                        }
                      ]
                    },
                    {
                      "id": "TECH:H44",
                      "title": "Using label elements to associate text labels with form controls"
                    },
                    {
                      "id": "TECH:FLASH32",
                      "title": "Using auto labeling to associate text labels with form controls"
                    },
                    {
                      "id": "TECH:FLASH29",
                      "title": "Setting the label property for form components"
                    },
                    {
                      "id": "TECH:FLASH25",
                      "title": "Labeling a form control by setting its accessible name"
                    },
                    {
                      "id": "TECH:PDF10",
                      "title": "Providing labels for interactive form controls in PDF documents"
                    },
                    {
                      "id": "TECH:SL26",
                      "title": "Using LabeledBy to Associate Labels and Targets in Silverlight"
                    },
                    {
                      "id": "TECH:H71",
                      "title": "Providing a description for groups of form controls using fieldset and legend elements"
                    },
                    {
                      "id": "TECH:FLASH8",
                      "title": "Adding a group name to the accessible name of a form control"
                    },
                    {
                      "id": "TECH:SL8",
                      "title": "Displaying HelpText in Silverlight User Interfaces"
                    },
                    {
                      "id": "TECH:G167",
                      "title": "Using an adjacent button to label the purpose of a field"
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G13",
                      "title": "Describing what will happen before a change to a form control that causes a change of context to occur is made"
                    },
                    {
                      "id": "TECH:SL19",
                      "title": "Providing User Instructions With AutomationProperties.HelpText in Silverlight"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:F82",
                      "title": "Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:error-suggestion",
              "alt_id": ["minimize-error-suggestions"],
              "num": "3.3.3",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Error Suggestion",
              "title": "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If a mandatory field contains no information:",
                          "techniques": [
                            {
                              "id": "TECH:G83",
                              "title": "Providing text descriptions to identify required fields that were not completed"
                            },
                            {
                              "id": "TECH:ARIA2",
                              "title": "Identifying a required field with the aria-required property"
                            },
                            {
                              "id": "TECH:PDF5",
                              "title": "Indicating required form controls in PDF forms"
                            },
                            {
                              "id": "TECH:SL35",
                              "title": "Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight"
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If information for a field is required to be in a specific data format:",
                          "techniques": [
                            {
                              "id": "TECH:ARIA18",
                              "title": "Using aria-alertdialog to Identify Errors"
                            },
                            {
                              "id": "TECH:G85",
                              "title": "Providing a text description when user input falls outside the required format or values"
                            },
                            {
                              "id": "TECH:G177",
                              "title": "Providing suggested correction text"
                            },
                            {
                              "id": "TECH:SCR18",
                              "title": "Providing client-side validation and alert"
                            },
                            {
                              "id": "TECH:SCR32",
                              "title": "Providing client-side validation and adding error text via the DOM"
                            },
                            {
                              "id": "TECH:FLASH12",
                              "title": "Providing client-side validation and adding error text via the accessible description"
                            },
                            {
                              "id": "TECH:PDF22",
                              "title": "Indicating when user input falls outside the required format or values in PDF forms"
                            }
                          ]
                        },
                        {
                          "title": "Situation C: Information provided by the user is required to be one of a limited set of values:",
                          "techniques": [
                            {
                              "id": "TECH:ARIA18",
                              "title": "Using aria-alertdialog to Identify Errors"
                            },
                            {
                              "id": "TECH:G84",
                              "title": "Providing a text description when the user provides information that is not in the list of allowed values"
                            },
                            {
                              "id": "TECH:G177",
                              "title": "Providing suggested correction text"
                            },
                            {
                              "id": "TECH:SCR18",
                              "title": "Providing client-side validation and alert"
                            },
                            {
                              "id": "TECH:SCR32",
                              "title": "Providing client-side validation and adding error text via the DOM"
                            },
                            {
                              "id": "TECH:FLASH12",
                              "title": "Providing client-side validation and adding error text via the accessible description"
                            },
                            {
                              "id": "TECH:PDF22",
                              "title": "Indicating when user input falls outside the required format or values in PDF forms"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:G139",
                      "title": "Creating a mechanism that allows users to jump to errors"
                    },
                    {
                      "id": "TECH:G199",
                      "title": "Providing success feedback when data is submitted successfully"
                    },
                    {
                      "id": "TECH:SCR18",
                      "title": "Providing client-side validation and alert"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:error-prevention-legal-financial-data",
              "alt_id": ["minimize-error-reversible"],
              "num": "3.3.4",
              "versions": ["2.0", "2.1"],
              "level": "AA",
              "handle": "Error Prevention (Legal, Financial, Data)",
              "title": "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Reversible",
                      "text": "Submissions are reversible."
                    },
                    {
                      "handle": "Checked",
                      "text": "Data entered by the user is checked for input errors and the user is provided an opportunity to correct them."
                    },
                    {
                      "handle": "Confirmed",
                      "text": "A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission."
                    }
                  ]
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If an application causes a legal transaction to occur, such as making a purchase or submitting an income tax return:",
                          "techniques": [
                            {
                              "id": "TECH:G164",
                              "title": "Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request"
                            },
                            {
                              "id": "TECH:G98",
                              "title": "Providing the ability for the user to review and correct answers before submitting"
                            },
                            {
                              "id": "TECH:G155",
                              "title": "Providing a checkbox in addition to a submit button"
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If an action causes information to be deleted:",
                          "techniques": [
                            {
                              "id": "TECH:G99",
                              "title": "Providing the ability to recover deleted information"
                            },
                            {
                              "id": "TECH:G168",
                              "title": "Requesting confirmation to continue with selected action"
                            },
                            {
                              "id": "TECH:G155",
                              "title": "Providing a checkbox in addition to a submit button"
                            }
                          ]
                        },
                        {
                          "title": "Situation C: If the Web page includes a testing application:",
                          "techniques": [
                            {
                              "id": "TECH:G98",
                              "title": "Providing the ability for the user to review and correct answers before submitting"
                            },
                            {
                              "id": "TECH:G168",
                              "title": "Requesting confirmation to continue with selected action"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:SCR18",
                      "title": "Providing client-side validation and alert"
                    },
                    {
                      "id": "TECH:SL35",
                      "title": "Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight"
                    },
                    {
                      "id": "TECH:G199",
                      "title": "Providing success feedback when data is submitted successfully"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:help",
              "alt_id": ["minimize-error-context-help"],
              "num": "3.3.5",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Help",
              "title": "Context-sensitive help is available.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If a form requires text input:",
                          "techniques": [
                            {
                              "id": "TECH:G71",
                              "title": "Providing a help link on every Web page"
                            },
                            {
                              "id": "TECH:G193",
                              "title": "Providing help by an assistant in the Web page"
                            },
                            {
                              "id": "TECH:G194",
                              "title": "Providing spell checking and suggestions for text input"
                            },
                            {
                              "id": "TECH:G184",
                              "title": "Providing text instructions at the beginning of a form or set of fields that describes the necessary input"
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If a form requires text input in an expected data format:",
                          "techniques": [
                            {
                              "id": "TECH:G89",
                              "title": "Providing expected data format and example"
                            },
                            {
                              "id": "TECH:G184",
                              "title": "Providing text instructions at the beginning of a form or set of fields that describes the necessary input"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:H89",
                      "title": "Using the title attribute to provide context-sensitive help"
                    }
                  ]
                },
                { "failure": [] }
              ]
            },
            {
              "id": "WCAG2:error-prevention-all",
              "alt_id": ["minimize-error-reversible-all"],
              "num": "3.3.6",
              "versions": ["2.0", "2.1"],
              "level": "AAA",
              "handle": "Error Prevention (All)",
              "title": "For Web pages that require the user to submit information, at least one of the following is true:",
              "details": [
                {
                  "type": "ulist",
                  "items": [
                    {
                      "handle": "Reversible",
                      "text": "Submissions are reversible."
                    },
                    {
                      "handle": "Checked",
                      "text": "Data entered by the user is checked for input errors and the user is provided an opportunity to correct them."
                    },
                    {
                      "handle": "Confirmed",
                      "text": "A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission."
                    }
                  ]
                }
              ],
              "techniques": [{ "sufficient": [] }, { "advisory": [] }, { "failure": [] }]
            }
          ],
          "techniques": []
        }
      ]
    },
    {
      "id": "WCAG2:robust",
      "num": "4",
      "versions": ["2.0", "2.1"],
      "handle": "Robust",
      "title": "Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.",
      "guidelines": [
        {
          "id": "WCAG2:compatible",
          "alt_id": ["ensure-compat"],
          "num": "4.1",
          "versions": ["2.0", "2.1"],
          "handle": "Compatible",
          "title": "Maximize compatibility with current and future user agents, including assistive technologies.",
          "successcriteria": [
            {
              "id": "WCAG2:parsing",
              "alt_id": ["ensure-compat-parses"],
              "num": "4.1.1",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/parsing",
              "dq_id":["duplicate-id", "duplicate-id-active", "duplicate-id-aria"],
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Parsing",
              "title": "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "id": "TECH:G134",
                      "title": "Validating Web pages"
                    },
                    {
                      "id": "TECH:G192",
                      "title": "Fully conforming to specifications"
                    },
                    {
                      "id": "TECH:H88",
                      "title": "Using HTML according to spec"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Ensuring that Web pages can be parsed by using one of the following techniques:",
                      "using": [
                        {
                          "and": [
                            {
                              "id": "TECH:H74",
                              "title": "Ensuring that opening and closing tags are used according to specification"
                            },
                            {
                              "id": "TECH:H93",
                              "title": "Ensuring that id attributes are unique on a Web page"
                            },
                            {
                              "id": "TECH:H94",
                              "title": "Ensuring that elements do not contain duplicate attributes"
                            }
                          ]
                        },
                        {
                          "id": "TECH:H75",
                          "title": "Ensuring that Web pages are well-formed"
                        }
                      ]
                    },
                    {
                      "id": "TECH:SL33",
                      "title": "Using Well-Formed XAML to Define a Silverlight User Interface"
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F70",
                      "title": "Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup"
                    },
                    {
                      "id": "TECH:F77",
                      "title": "Failure of Success Criterion 4.1.1 due to duplicate values of type ID"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:name-role-value",
              "alt_id": ["ensure-compat-rsv"],
              "num": "4.1.2",
              "url": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value",
              "dq_id":["aria-valid-attr-value", "aria-input-field-name", "aria-roles", "aria-toggle-field-name", "aria-hidden-focus", "aria-hidden-body", "button-name", "aria-valid-attr", "frame-title", "aria-required-attr", "aria-roledescription"],
              "versions": ["2.0", "2.1"],
              "level": "A",
              "handle": "Name, Role, Value",
              "title": "For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.",
              "details": [
                {
                  "type": "note",
                  "handle": "Note 1",
                  "text": "This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification."
                }
              ],
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If using a standard user interface component in a markup language (e.g., HTML):",
                          "techniques": [
                            {
                              "id": "TECH:ARIA14",
                              "title": "Using aria-label to provide an invisible label where a visible label cannot be used"
                            },
                            {
                              "id": "TECH:ARIA16",
                              "title": "Using aria-labelledby to provide a name for user interface controls"
                            },
                            {
                              "id": "TECH:G108",
                              "title": "Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes",
                              "using": [
                                {
                                  "id": "TECH:H91",
                                  "title": "Using HTML form controls and links"
                                },
                                {
                                  "id": "TECH:H44",
                                  "title": "Using label elements to associate text labels with form controls"
                                },
                                {
                                  "id": "TECH:H64",
                                  "title": "Using the title attribute of the frame and iframe elements"
                                },
                                {
                                  "id": "TECH:H65",
                                  "title": "Using the title attribute to identify form controls when the label element cannot be used"
                                },
                                {
                                  "id": "TECH:H88",
                                  "title": "Using HTML according to spec"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If using script or code to re-purpose a standard user interface component in a markup language:",
                          "techniques": [
                            {
                              "id": "TECH:text",
                              "title": "Exposing the names and roles, allowing user-settable properties to be directly set, and providing notification of changes using one of the following techniques:",
                              "using": [
                                {
                                  "id": "TECH:ARIA16",
                                  "title": "Using aria-labelledby to provide a name for user interface controls"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation C: If using a standard user interface component in a programming technology:",
                          "techniques": [
                            {
                              "id": "TECH:G135",
                              "title": "Using the accessibility API features of a technology to expose names and notification of changes",
                              "using": [
                                {
                                  "id": "TECH:FLASH32",
                                  "title": "Using auto labeling to associate text labels with form controls"
                                },
                                {
                                  "id": "TECH:FLASH29",
                                  "title": "Setting the label property for form components"
                                },
                                {
                                  "id": "TECH:FLASH30",
                                  "title": "Specifying accessible names for image buttons"
                                },
                                {
                                  "id": "TECH:PDF10",
                                  "title": "Providing labels for interactive form controls in PDF documents"
                                },
                                {
                                  "id": "TECH:PDF12",
                                  "title": "Providing name, role, value information for form fields in PDF documents"
                                },
                                {
                                  "id": "TECH:SL26",
                                  "title": "Using LabeledBy to Associate Labels and Targets in Silverlight"
                                },
                                {
                                  "id": "TECH:SL32",
                                  "title": "Using Silverlight Text Elements for Appropriate Accessibility Role"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation D: If creating your own user interface component in a programming language:",
                          "techniques": [
                            {
                              "id": "TECH:G10",
                              "title": "Creating components using a technology that supports the accessibility notification of changes",
                              "using": [
                                {
                                  "id": "TECH:ARIA4",
                                  "title": "Using a WAI-ARIA role to expose the role of a user interface component"
                                },
                                {
                                  "id": "TECH:ARIA5",
                                  "title": "Using WAI-ARIA state and property attributes to expose the state of a user interface component"
                                },
                                {
                                  "id": "TECH:ARIA16",
                                  "title": "Using aria-labelledby to provide a name for user interface controls"
                                },
                                {
                                  "id": "TECH:SL6",
                                  "title": "Defining a UI Automation Peer for a Custom Silverlight Control"
                                },
                                {
                                  "id": "TECH:SL18",
                                  "title": "Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name"
                                },
                                {
                                  "id": "TECH:SL20",
                                  "title": "Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name"
                                },
                                {
                                  "id": "TECH:SL30",
                                  "title": "Using Silverlight Control Compositing and AutomationProperties.Name"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { "advisory": [] },
                {
                  "failure": [
                    {
                      "id": "TECH:F59",
                      "title": "Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control"
                    },
                    {
                      "id": "TECH:F15",
                      "title": "Failure of Success Criterion 4.1.2 due to implementing custom controls that do not use an accessibility API for the technology, or do so incompletely"
                    },
                    {
                      "id": "TECH:F20",
                      "title": "Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur"
                    },
                    {
                      "id": "TECH:F68",
                      "title": "Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name"
                    },
                    {
                      "id": "TECH:F79",
                      "title": "Failure of Success Criterion 4.1.2 due to the focus state of a user interface component not being programmatically determinable or no notification of change of focus state available"
                    },
                    {
                      "id": "TECH:F86",
                      "title": "Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number"
                    },
                    {
                      "id": "TECH:F89",
                      "title": "Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link"
                    }
                  ]
                }
              ]
            },
            {
              "id": "WCAG2:status-messages",
              "alt_id": [],
              "num": "4.1.3",
              "versions": ["2.1"],
              "level": "AA",
              "handle": "Status Messages",
              "title": "In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.",
              "techniques": [
                {
                  "sufficient": [
                    {
                      "situations": [
                        {
                          "title": "Situation A: If a status message advises on the success or results of an action, or the state of an application:",
                          "techniques": [
                            {
                              "id": "TECH:ARIA22",
                              "title": "Using role=status to present status messages",
                              "using": [
                                {
                                  "id": "TECH:G199",
                                  "title": "Providing success feedback when data is submitted successfully"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation B: If a status message conveys a suggestion, or a warning on the existence of an error:",
                          "techniques": [
                            {
                              "id": "TECH:ARIA19",
                              "title": "Using ARIA role=alert or Live Regions to Identify Errors",
                              "using": [
                                {
                                  "id": "TECH:G83",
                                  "title": "Providing text descriptions to identify required fields that were not completed"
                                },
                                {
                                  "id": "TECH:G84",
                                  "title": "Providing a text description when the user provides information that is not in the list of allowed values"
                                },
                                {
                                  "id": "TECH:G85",
                                  "title": "Providing a text description when user input falls outside the required format or values"
                                },
                                {
                                  "id": "TECH:G177",
                                  "title": "Providing suggested correction text"
                                },
                                {
                                  "id": "TECH:G194",
                                  "title": "Providing spell checking and suggestions for text input"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "title": "Situation C: If a status message conveys information on the progress of a process:",
                          "techniques": [
                            {
                              "id": "TECH:ARIA23",
                              "title": "Using role=log to identify sequential information updates"
                            },
                            {
                              "id": "TECH:text",
                              "title": "Using role=\"progressbar\" (future link)"
                            },
                            {
                              "and": [
                                {
                                  "id": "TECH:ARIA22",
                                  "title": "Using role=status to present status messages"
                                },
                                {
                                  "id": "TECH:G193",
                                  "title": "Providing help by an assistant in the Web page"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "advisory": [
                    {
                      "id": "TECH:text",
                      "title": "Using aria-live regions with chat clients (future link)"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Using role=\"marquee\" (future link)"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Using role=\"timer\" (future link)"
                    },
                    {
                      "id": "TECH:ARIA18",
                      "title": "Using aria-alertdialog to Identify Errors"
                    },
                    {
                      "id": "TECH:SCR14",
                      "title": "Using scripts to make nonessential alerts optional"
                    }
                  ]
                },
                {
                  "failure": [
                    {
                      "id": "TECH:text",
                      "title": "Using role=\"alert\" or aria-live=\"assertive\" on content which is not important and time-sensitive (future link)"
                    },
                    {
                      "id": "TECH:text",
                      "title": "Using a visibilitychange event to hide or display a document without switching the document's live regions between active and inactive (future link)"
                    }
                  ]
                }
              ]
            }
          ],
          "techniques": []
        }
      ]
    }
  ]
}
