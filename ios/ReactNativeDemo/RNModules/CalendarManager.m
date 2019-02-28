
#import "CalendarManager.h"

@implementation CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
    NSLog(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(test:(NSString *)message) {
    dispatch_async(dispatch_get_main_queue(), ^{
        NSLog(@"%@",message);
    });
}
@end
